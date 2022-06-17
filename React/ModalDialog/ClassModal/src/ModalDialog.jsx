import React from "react";
import style from "./ModalDialog.module.css";
export class ModalDialog extends React.Component {
    constructor() {
        super();
        this.modalHandler = (e) => {
            this.setState({
                data: e.detail.data,
                visible: true
            });
        };
        this.state = {
            data: {
                title: '',
                closeOnClick: false,
                content: ''
            },
            visible: false
        };
        this.close = this.close.bind(this);
        this.modalClick = this.modalClick.bind(this);
    }

    render() {
        return !this.state.visible ? null : <div className={ style.modal } onClick={ this.modalClick }>
            <div className={ style.dialog }>
                <div className={ style.dialog_title }>{ this.state.data.title }<span className={ style.dialog_close } onClick={ this.close }>+</span></div>
                <div className={ style.dialog_content }>
                    {
                        this.state.data.content
                    }
                </div>
            </div>
        </div>;
    }
    componentDidMount() {
        document.addEventListener('modal', this.modalHandler);
    }
    componentWillUnmount() {
        document.removeEventListener('modal', this.modalHandler);
    }
    close() {
        this.setState({
            visible: false,
            data: {
                title: '',
                closeOnClick: false,
                content: ''
            }
        });
    }
    static show(data) {
        document.dispatchEvent(new CustomEvent('modal', {
            detail: {
                data
            }
        }));
    }
    modalClick() {
        if (this.state.data.closeOnClick) this.close();
    }
}