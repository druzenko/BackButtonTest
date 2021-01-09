const {ccclass, property} = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    start () {
        
        this.label.string = this.text;

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    onDestroy() {

        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    onKeyDown(event) {

        console.log("onKeyDown, keyCode = " + event.keyCode);

        this.label.string = "onKeyDown, keyCode = " + event.keyCode;
    }

    onKeyUp(event) {

        console.log("onKeyUp, keyCode = " + event.keyCode);
        
        this.label.string = "onKeyUp, keyCode = " + event.keyCode;
    }
}
