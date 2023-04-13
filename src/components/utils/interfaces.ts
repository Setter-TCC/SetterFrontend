import { MouseEventHandler } from 'react';

export interface IButton {
    text: string,
    textColor: string,
    backgroundColor: string,
    isFull: boolean,
    path: string,
    onClick?: MouseEventHandler,
    isDisabled?: boolean,
}
