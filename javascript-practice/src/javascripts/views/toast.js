import { toastDelay } from "../utilities";

export default class ToastNotificationView {
	constructor() {
		this.toastEl = document.querySelector(".toast");
		this.toastMessageEl = document.querySelector(".toast-message");
	}

	/**
	 * Display a toast message with a specific state and message.
	 * @param {string} state - The state of the toast ('success', 'error')
	 * @param {string} message - The message content to be displayed in the toast
	 */
	showToastNotification = async (state, message) => {
		this.toastEl.classList.add(`toast-${state}`);
		this.toastMessageEl.innerText = message;

		await toastDelay(2000);
		this.toastEl.classList.remove(`toast-${state}`);
	};
}
