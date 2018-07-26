import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
export declare const INPUTSWITCH_VALUE_ACCESSOR: any;
export declare class InputSwitch implements ControlValueAccessor {
    style: any;
    styleClass: string;
    tabindex: number;
    inputId: string;
    name: string;
    disabled: boolean;
    onChange: EventEmitter<any>;
    checked: boolean;
    focused: boolean;
    onModelChange: Function;
    onModelTouched: Function;
    onClick(event: Event, cb: HTMLInputElement): void;
    onInputChange(event: Event): void;
    toggle(event: Event): void;
    updateModel(value: boolean): void;
    onFocus(event: Event): void;
    onBlur(event: Event): void;
    writeValue(checked: any): void;
    registerOnChange(fn: Function): void;
    registerOnTouched(fn: Function): void;
    setDisabledState(val: boolean): void;
}
export declare class InputSwitchModule {
}
