'use strict';

exports.__esModule = true;

var _utils = require('flux/utils');

var _ActorAppDispatcher = require('../dispatcher/ActorAppDispatcher');

var _ActorAppDispatcher2 = _interopRequireDefault(_ActorAppDispatcher);

var _ActorAppConstants = require('../constants/ActorAppConstants');

var _ActorClient = require('../utils/ActorClient');

var _ActorClient2 = _interopRequireDefault(_ActorClient);

var _PeerUtils = require('../utils/PeerUtils');

var _PeerUtils2 = _interopRequireDefault(_PeerUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Copyright (C) 2015 Actor LLC. <https://actor.im>
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var DropdownStore = function (_Store) {
  _inherits(DropdownStore, _Store);

  function DropdownStore(dispatcher) {
    _classCallCheck(this, DropdownStore);

    var _this = _possibleConstructorReturn(this, _Store.call(this, dispatcher));

    _this._isMessageDropdownOpen = false;
    _this._isRecentContextOpen = false;
    _this._targetRect = {};
    _this._contextPos = {};
    _this._message = {};
    _this._peer = {};
    return _this;
  }

  DropdownStore.prototype.isMessageDropdownOpen = function isMessageDropdownOpen(rid) {
    if (rid === this._message.rid) {
      return this._isMessageDropdownOpen;
    } else {
      return false;
    }
  };

  DropdownStore.prototype.isRecentContextOpen = function isRecentContextOpen() {
    return this._isRecentContextOpen;
  };

  DropdownStore.prototype.getMessage = function getMessage() {
    return this._message;
  };

  DropdownStore.prototype.getTargetRect = function getTargetRect() {
    return this._targetRect;
  };

  DropdownStore.prototype.getContextPos = function getContextPos() {
    return this._contextPos;
  };

  DropdownStore.prototype.getPeer = function getPeer() {
    return this._peer;
  };

  DropdownStore.prototype.__onDispatch = function __onDispatch(action) {
    switch (action.type) {
      case _ActorAppConstants.ActionTypes.MESSAGE_DROPDOWN_SHOW:
        this._isMessageDropdownOpen = true;
        this._isRecentContextOpen = false;
        this._message = action.message;
        this._targetRect = action.targetRect;
        this.__emitChange();
        break;
      case _ActorAppConstants.ActionTypes.MESSAGE_DROPDOWN_HIDE:
        this._isMessageDropdownOpen = false;
        this.__emitChange();
        break;

      case _ActorAppConstants.ActionTypes.RECENT_CONTEXT_MENU_SHOW:
        this._isRecentContextOpen = true;
        this._isMessageDropdownOpen = false;
        this._contextPos = action.contextPos;
        this._peer = action.peer;
        this.__emitChange();
        break;
      case _ActorAppConstants.ActionTypes.RECENT_CONTEXT_MENU_HIDE:
        this._isRecentContextOpen = false;
        this.__emitChange();
        break;
      default:
    }
  };

  return DropdownStore;
}(_utils.Store);

exports.default = new DropdownStore(_ActorAppDispatcher2.default);
//# sourceMappingURL=DropdownStore.js.map