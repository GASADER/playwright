import { Locator, Page, expect } from "@playwright/test";
import {app} from "../fixtures/App";
import { tweet } from "../fixtures/Home";
export class HomePage {
    readonly _page: Page;
    readonly _messageField: Locator;
    readonly _postButton: Locator;


    constructor(page: Page) {
        this._page = page; 
        this._messageField = page.getByTestId("message-field");
        this._postButton = page.getByTestId("post-button");
    }


    async postMessage() {
        await this._messageField.fill(tweet.postMessage);
        await this._postButton.click();
    }

}