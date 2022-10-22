window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskin/BtnAdd.exml'] = window.skins.BtnAdd = (function (_super) {
	__extends(BtnAdd, _super);
	function BtnAdd() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 54;
		this.width = 54;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","percentHeight",100),
					new eui.SetProperty("_Image1","percentWidth",100)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","percentWidth",90)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = BtnAdd.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "加号按钮_png";
		t.verticalCenter = 0;
		return t;
	};
	return BtnAdd;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskin/BtnBack.exml'] = window.skins.BtnBack = (function (_super) {
	__extends(BtnBack, _super);
	function BtnBack() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 80;
		this.width = 120;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","percentHeight",100),
					new eui.SetProperty("_Image1","percentWidth",100)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentHeight",90),
					new eui.SetProperty("_Image1","percentWidth",90)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = BtnBack.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.right = 0;
		t.source = "返回按钮_png";
		return t;
	};
	return BtnBack;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskin/BtnClose.exml'] = window.skins.BtnClose = (function (_super) {
	__extends(BtnClose, _super);
	function BtnClose() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 62;
		this.width = 59;
		this.elementsContent = [this._Image1_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","percentWidth",100),
					new eui.SetProperty("_Image1","percentHeight",100)
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","percentWidth",90),
					new eui.SetProperty("_Image1","percentHeight",90)
				])
			,
			new eui.State ("disabled",
				[
				])
		];
	}
	var _proto = BtnClose.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.source = "关闭按钮_png";
		t.verticalCenter = 0;
		return t;
	};
	return BtnClose;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskin/ItemComp.exml'] = window.skins.ItemComp = (function (_super) {
	__extends(ItemComp, _super);
	function ItemComp() {
		_super.call(this);
		this.skinParts = ["txtName","itemIcon","txtLevel"];
		
		this.height = 130;
		this.width = 106;
		this.elementsContent = [this._Group3_i()];
		this.txtName_i();
		
		this._Image1_i();
		
		this._Image2_i();
		
		this._BasicLayout1_i();
		
		this.itemIcon_i();
		
		this._Group2_i();
		
		this.states = [
			new eui.State ("empty",
				[
					new eui.AddItems("_Image1","_Group1",0,""),
					new eui.AddItems("_Image2","_Group1",1,""),
					new eui.SetProperty("_Image1","source","框_空_png"),
					new eui.SetProperty("_Image2","source","框_空外_png")
				])
			,
			new eui.State ("blue",
				[
					new eui.AddItems("txtName","",0,""),
					new eui.AddItems("_Image1","_Group1",0,""),
					new eui.AddItems("_Image2","_Group1",1,""),
					new eui.AddItems("itemIcon","_Group3",1,""),
					new eui.AddItems("_Group2","_Group3",1,""),
					new eui.SetProperty("txtName","text","装备1"),
					new eui.SetProperty("_Image1","source","框_蓝_png"),
					new eui.SetProperty("_Image2","source","框_蓝外_png"),
					new eui.SetProperty("_Group1","layout",this._BasicLayout1)
				])
			,
			new eui.State ("red",
				[
					new eui.AddItems("txtName","",0,""),
					new eui.AddItems("_Image1","_Group1",0,""),
					new eui.AddItems("_Image2","_Group1",1,""),
					new eui.AddItems("itemIcon","_Group3",1,""),
					new eui.AddItems("_Group2","_Group3",1,""),
					new eui.SetProperty("txtName","text","装备2"),
					new eui.SetProperty("_Image1","source","框_红_png"),
					new eui.SetProperty("_Image2","source","框_红外_png")
				])
		];
	}
	var _proto = ItemComp.prototype;

	_proto.txtName_i = function () {
		var t = new eui.Label();
		this.txtName = t;
		t.bottom = 0;
		t.percentWidth = 100;
		t.size = 20;
		t.textAlign = "center";
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		this._Group3 = t;
		t.height = 106;
		t.horizontalCenter = 0;
		t.width = 106;
		t.elementsContent = [this._Group1_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		this._Group1 = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.elementsContent = [];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.horizontalCenter = 0;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.verticalCenter = 0;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.left = 0;
		t.percentHeight = 96;
		t.percentWidth = 96;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		return t;
	};
	_proto.itemIcon_i = function () {
		var t = new eui.Image();
		this.itemIcon = t;
		t.horizontalCenter = 0;
		t.percentHeight = 90;
		t.percentWidth = 90;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "武器_png";
		t.verticalCenter = 0;
		t.x = -207;
		t.y = -175;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		this._Group2 = t;
		t.bottom = 0;
		t.left = 0;
		t.percentHeight = 50;
		t.percentWidth = 50;
		t.scaleX = 1;
		t.scaleY = 1;
		t.elementsContent = [this._Image3_i(),this.txtLevel_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.bottom = 5;
		t.left = 1;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.source = "等级底板_png";
		return t;
	};
	_proto.txtLevel_i = function () {
		var t = new eui.Label();
		this.txtLevel = t;
		t.left = 0;
		t.percentWidth = 80;
		t.size = 24;
		t.text = "4";
		t.textAlign = "center";
		t.verticalCenter = 0;
		return t;
	};
	_proto._BasicLayout1_i = function () {
		var t = new eui.BasicLayout();
		this._BasicLayout1 = t;
		return t;
	};
	return ItemComp;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskin/ItemListHorizontal.exml'] = window.skins.ItemListHorizontal = (function (_super) {
	__extends(ItemListHorizontal, _super);
	function ItemListHorizontal() {
		_super.call(this);
		this.skinParts = ["item0","item1","item2","item3","item4"];
		
		this.height = 120;
		this.width = 1280;
		this.elementsContent = [this._Group6_i()];
		this.states = [
			new eui.State ("inited",
				[
					new eui.SetProperty("item0","visible",false),
					new eui.SetProperty("item1","visible",false),
					new eui.SetProperty("item2","currentState","empty"),
					new eui.SetProperty("item2","visible",false),
					new eui.SetProperty("item3","currentState","empty"),
					new eui.SetProperty("item3","visible",false),
					new eui.SetProperty("item4","currentState","empty"),
					new eui.SetProperty("item4","visible",false)
				])
			,
			new eui.State ("default",
				[
					new eui.SetProperty("item0","currentState","blue"),
					new eui.SetProperty("item1","currentState","blue")
				])
			,
			new eui.State ("allEmpty",
				[
					new eui.SetProperty("item0","currentState","empty"),
					new eui.SetProperty("item1","currentState","empty"),
					new eui.SetProperty("item2","currentState","empty"),
					new eui.SetProperty("item3","currentState","empty"),
					new eui.SetProperty("item4","currentState","empty")
				])
		];
	}
	var _proto = ItemListHorizontal.prototype;

	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 20;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this.item0_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.item0_i = function () {
		var t = new eui.Component();
		this.item0 = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.skinName = "skins.ItemComp";
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 20;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this.item1_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.item1_i = function () {
		var t = new eui.Component();
		this.item1 = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.skinName = "skins.ItemComp";
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 20;
		t.layout = this._VerticalLayout3_i();
		t.elementsContent = [this.item2_i()];
		return t;
	};
	_proto._VerticalLayout3_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.item2_i = function () {
		var t = new eui.Component();
		this.item2 = t;
		t.currentState = "red";
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.skinName = "skins.ItemComp";
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 20;
		t.layout = this._VerticalLayout4_i();
		t.elementsContent = [this.item3_i()];
		return t;
	};
	_proto._VerticalLayout4_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.item3_i = function () {
		var t = new eui.Component();
		this.item3 = t;
		t.currentState = "red";
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.skinName = "skins.ItemComp";
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 20;
		t.layout = this._VerticalLayout5_i();
		t.elementsContent = [this.item4_i()];
		return t;
	};
	_proto._VerticalLayout5_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.item4_i = function () {
		var t = new eui.Component();
		this.item4 = t;
		t.currentState = "red";
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.skinName = "skins.ItemComp";
		return t;
	};
	return ItemListHorizontal;
})(eui.Skin);generateEUI.paths['resource/eui_skins/myskin/ItemPage.exml'] = window.skins.ItemPage = (function (_super) {
	__extends(ItemPage, _super);
	function ItemPage() {
		_super.call(this);
		this.skinParts = ["btnClose","list","scroller","txtCurrent","txtLimit","btnAdd","btnBack"];
		
		this.height = 1280;
		this.width = 720;
		this.elementsContent = [this._Group1_i(),this._Group11_i()];
	}
	var _proto = ItemPage.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto._Group11_i = function () {
		var t = new eui.Group();
		t.percentHeight = 80;
		t.percentWidth = 100;
		t.verticalCenter = 0;
		t.layout = this._VerticalLayout3_i();
		t.elementsContent = [this._Group3_i(),this._Group9_i(),this._Group10_i()];
		return t;
	};
	_proto._VerticalLayout3_i = function () {
		var t = new eui.VerticalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.height = 50;
		t.maxWidth = 720;
		t.percentWidth = 100;
		t.elementsContent = [this._Group2_i()];
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.height = 60;
		t.percentWidth = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this._Label1_i(),this.btnClose_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.source = "标题栏_png";
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.bold = true;
		t.horizontalCenter = 0;
		t.size = 40;
		t.text = "背包";
		t.verticalCenter = 0;
		return t;
	};
	_proto.btnClose_i = function () {
		var t = new eui.Button();
		this.btnClose = t;
		t.right = 0;
		t.skinName = "skins.BtnClose";
		t.top = -8;
		return t;
	};
	_proto._Group9_i = function () {
		var t = new eui.Group();
		t.maxHeight = 1000;
		t.maxWidth = 720;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.top = 0;
		t.x = 0;
		t.layout = this._VerticalLayout2_i();
		t.elementsContent = [this._Group8_i()];
		return t;
	};
	_proto._VerticalLayout2_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 0;
		t.horizontalAlign = "center";
		t.verticalAlign = "top";
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.elementsContent = [this._Image2_i(),this._Group4_i(),this._Group7_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.source = "背景_png";
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.horizontalCenter = 0;
		t.percentHeight = 85;
		t.percentWidth = 94;
		t.top = 30;
		t.elementsContent = [this._Image3_i(),this.scroller_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.scale9Grid = new egret.Rectangle(5,6,22,21);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "格子背景_png";
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.scroller_i = function () {
		var t = new eui.Scroller();
		this.scroller = t;
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.scaleX = 1;
		t.scaleY = 1;
		t.viewport = this.list_i();
		return t;
	};
	_proto.list_i = function () {
		var t = new eui.Group();
		this.list = t;
		t.percentWidth = 100;
		t.layout = this._VerticalLayout1_i();
		t.elementsContent = [this._Component1_i(),this._Component2_i()];
		return t;
	};
	_proto._VerticalLayout1_i = function () {
		var t = new eui.VerticalLayout();
		t.gap = 12;
		t.horizontalAlign = "center";
		t.verticalAlign = "top";
		return t;
	};
	_proto._Component1_i = function () {
		var t = new eui.Component();
		t.currentState = "default";
		t.percentWidth = 100;
		t.skinName = "skins.ItemListHorizontal";
		return t;
	};
	_proto._Component2_i = function () {
		var t = new eui.Component();
		t.currentState = "allEmpty";
		t.percentWidth = 100;
		t.skinName = "skins.ItemListHorizontal";
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.bottom = 0;
		t.height = 80;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout2_i();
		t.elementsContent = [this._Label2_i(),this._Group6_i()];
		return t;
	};
	_proto._HorizontalLayout2_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "left";
		t.paddingLeft = 20;
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.left = 30;
		t.size = 40;
		t.text = "容量";
		t.verticalCenter = 0;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.percentHeight = 60;
		t.width = 256;
		t.elementsContent = [this._Image4_i(),this._Group5_i(),this.btnAdd_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.source = "容量底板_png";
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this.txtCurrent_i(),this._Label3_i(),this.txtLimit_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.horizontalAlign = "center";
		t.verticalAlign = "middle";
		return t;
	};
	_proto.txtCurrent_i = function () {
		var t = new eui.Label();
		this.txtCurrent = t;
		t.size = 40;
		t.text = "10";
		t.textColor = 0x4AC610;
		t.x = 105;
		t.y = 20;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.size = 40;
		t.text = "/";
		t.x = 163;
		t.y = 17;
		return t;
	};
	_proto.txtLimit_i = function () {
		var t = new eui.Label();
		this.txtLimit = t;
		t.size = 40;
		t.text = "50";
		t.x = 180;
		t.y = 33;
		return t;
	};
	_proto.btnAdd_i = function () {
		var t = new eui.Button();
		this.btnAdd = t;
		t.height = 60;
		t.right = -25;
		t.skinName = "skins.BtnAdd";
		t.verticalCenter = 0;
		t.width = 60;
		return t;
	};
	_proto._Group10_i = function () {
		var t = new eui.Group();
		t.percentWidth = 100;
		t.elementsContent = [this.btnBack_i()];
		return t;
	};
	_proto.btnBack_i = function () {
		var t = new eui.Button();
		this.btnBack = t;
		t.bottom = -10;
		t.right = 0;
		t.scaleX = 1;
		t.scaleY = 1;
		t.skinName = "skins.BtnBack";
		t.touchChildren = true;
		t.x = 300;
		t.y = -86;
		return t;
	};
	return ItemPage;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);