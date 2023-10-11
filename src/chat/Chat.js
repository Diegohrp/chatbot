const { mainMenu } = require('../menu/mainMenu');
const { finalMenu } = require('../menu/finalMenu');
const { chatStates } = require('./chatStates');

class Chat {
  #client;
  #userPhone;
  #message;
  #reply;
  #chatState;
  constructor(botClient) {
    this.#client = botClient;
    this.#userPhone = null;
    this.#message = { content: '', fromGroup: null };
    this.#reply = '';
    this.#chatState = {
      current: { state: chatStates.onStart, menu: mainMenu },
      prev: { state: chatStates.onStart, menu: mainMenu },
    };
  }

  set userPhone(userPhone) {
    this.#userPhone = userPhone;
  }

  set message({ content, fromGroup }) {
    this.#message = { content, fromGroup };
  }

  get chatState() {
    return this.#chatState;
  }

  getNextMenu() {
    //Obtiene el "valor" de la opción seleccionada en el menú actual, si existe
    //El valor es un objeto, lo que se enviará al usuario es su atributo "text"
    //El objeto posteriormente se asignará como currentMenu
    const obj = this.#chatState.current.menu.options[this.#message.content];
    //Si no existe, dice que la opción es inválida y muestra el menú actual
    //En este caso no se obtuvo un submenú
    if (!obj) {
      this.#reply = `*Opción no válida, por favor elige una opción del menú.*

${this.#chatState.current.menu.text}`;
      return false;
    }
    return obj;
  }

  async startChat() {
    this.#reply = mainMenu.text;
    this.updateState({
      current: { state: chatStates.onMainMenu, menu: mainMenu },
      prev: this.#chatState.prev,
    });

    return this.sendReply();
  }

  async goBack() {
    let prev;

    this.#chatState.current.state === chatStates.onFinalMenu
      ? (prev = this.#chatState.prev)
      : (prev = { state: chatStates.onMainMenu, menu: mainMenu });

    this.updateState({
      current: prev,
      prev,
    });
    this.#reply = this.#chatState.current.menu.text;
    return await this.sendReply();
  }

  async sayGoodbye() {
    this.#reply = `Gracias por haber usado el servicio. Hasta luego!`;
    this.updateState({
      current: { state: chatStates.onExit, menu: null },
      prev: {},
    });
    return await this.sendReply();
  }

  updateState({ current, prev }) {
    this.#chatState.current = current;
    this.#chatState.prev = prev;
  }

  async userChoseGeneralOpt() {
    switch (this.#reply) {
      case chatStates.onMainMenu:
        await this.startChat();
        return true;
      case chatStates.onGoBack:
        await this.goBack();
        return true;
      case chatStates.onExit:
        await this.sayGoodbye();
        return true;
      default:
        return false;
    }
  }

  async sendReply() {
    await this.#client.startTyping(this.#userPhone);
    const result = await this.#client.sendText(this.#userPhone, this.#reply);
    return result;
  }

  async onMenu() {
    const nextMenu = this.getNextMenu();
    //El usuario seleccionó una opción no válida
    if (!nextMenu) {
      //No hay cambios de estado
      await this.sendReply();
    } else {
      this.#reply = nextMenu.text;

      if (await this.userChoseGeneralOpt()) return;

      let current;
      let prev;

      if (this.#chatState.current.state === chatStates.onMainMenu) {
        await this.sendReply();
        current = {
          state: chatStates.onSubMenu,
          menu: nextMenu,
        };
        prev = {
          state: chatStates.onMainMenu,
          menu: mainMenu,
        };
      } else if (this.#chatState.current.state === chatStates.onSubMenu) {
        await this.sendReply();
        //En caso de que sea una respuesta con otro menú
        if (nextMenu?.options) {
          prev = this.#chatState.current;
          current = { state: chatStates.onSubMenu, menu: nextMenu };
        } else {
          this.#reply = finalMenu.text;
          await this.sendReply();
          prev = this.#chatState.current;
          current = { state: chatStates.onFinalMenu, menu: finalMenu };
        }
      }
      this.updateState({ current, prev });
    }
  }

  async replyToUser() {
    if (!this.#message.fromGroup) {
      if (this.#chatState.current.state === chatStates.onStart) {
        await this.startChat();
      } else {
        await this.onMenu();
      }
    }
  }
}

module.exports = { Chat };
