class App {
    constructor() {
        this.name = 'Aristotle';
        this.display = document.getElementById('display');
        this.nameTextBox = document.getElementById('name');
        this.nameBtn = document.getElementById('submit-name');
        this.msgTextBox = document.getElementById('message');
        this.msgBtn = document.getElementById('submit-message');

        this.nameBtn.addEventListener('click', this._saveName.bind(this));
        this.msgBtn.addEventListener('click', () => this._submitMessage());
    }

    _saveName() {
        console.log(this)
        this.name = this.nameTextBox.value;
    }

    _submitMessage() {
        this.display.textContent = `${this.name}: ${this.msgTextBox.value}`
    }
}

const app = new App()