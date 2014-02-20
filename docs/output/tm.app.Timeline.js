Ext.data.JsonP.tm_app_Timeline({"autodetected":{},"meta":{},"subclasses":[],"aliases":{},"requires":[],"component":false,"files":[{"href":"timeline.html#tm-app-Timeline","filename":"timeline.js"}],"tagname":"class","uses":[],"mixedInto":[],"superclasses":["tm.event.EventDispatcher"],"members":[{"owner":"tm.event.EventDispatcher","meta":{"private":true},"tagname":"property","name":"_listeners","id":"property-_listeners"},{"owner":"tm.app.Timeline","meta":{},"tagname":"method","name":"constructor","id":"method-constructor"},{"owner":"tm.app.Timeline","meta":{"private":true},"tagname":"method","name":"_addAction","id":"method-_addAction"},{"owner":"tm.app.Timeline","meta":{"private":true},"tagname":"method","name":"_addTween","id":"method-_addTween"},{"owner":"tm.app.Timeline","meta":{"private":true},"tagname":"method","name":"_dirty","id":"method-_dirty"},{"owner":"tm.app.Timeline","meta":{"private":true},"tagname":"method","name":"_updateAction","id":"method-_updateAction"},{"owner":"tm.app.Timeline","meta":{"private":true,"chainable":true},"tagname":"method","name":"_updateDuration","id":"method-_updateDuration"},{"owner":"tm.app.Timeline","meta":{"private":true},"tagname":"method","name":"_updateTween","id":"method-_updateTween"},{"owner":"tm.event.EventDispatcher","meta":{},"tagname":"method","name":"addEventListener","id":"method-addEventListener"},{"owner":"tm.app.Timeline","meta":{"chainable":true},"tagname":"method","name":"by","id":"method-by"},{"owner":"tm.app.Timeline","meta":{"chainable":true},"tagname":"method","name":"call","id":"method-call"},{"owner":"tm.app.Timeline","meta":{"chainable":true},"tagname":"method","name":"clear","id":"method-clear"},{"owner":"tm.event.EventDispatcher","meta":{"chainable":true},"tagname":"method","name":"clearEventListener","id":"method-clearEventListener"},{"owner":"tm.event.EventDispatcher","meta":{},"tagname":"method","name":"dispatchEvent","id":"method-dispatchEvent"},{"owner":"tm.event.EventDispatcher","meta":{"chainable":true},"tagname":"method","name":"fire","id":"method-fire"},{"owner":"tm.app.Timeline","meta":{},"tagname":"method","name":"getTarget","id":"method-getTarget"},{"owner":"tm.app.Timeline","meta":{},"tagname":"method","name":"gotoAndPlay","id":"method-gotoAndPlay"},{"owner":"tm.app.Timeline","meta":{},"tagname":"method","name":"gotoAndStop","id":"method-gotoAndStop"},{"owner":"tm.event.EventDispatcher","meta":{},"tagname":"method","name":"hasEventListener","id":"method-hasEventListener"},{"owner":"tm.app.Timeline","meta":{"chainable":true},"tagname":"method","name":"load","id":"method-load"},{"owner":"tm.event.EventDispatcher","meta":{"chainable":true},"tagname":"method","name":"off","id":"method-off"},{"owner":"tm.event.EventDispatcher","meta":{"chainable":true},"tagname":"method","name":"on","id":"method-on"},{"owner":"tm.event.EventDispatcher","meta":{},"tagname":"method","name":"removeEventListener","id":"method-removeEventListener"},{"owner":"tm.app.Timeline","meta":{"chainable":true},"tagname":"method","name":"set","id":"method-set"},{"owner":"tm.app.Timeline","meta":{},"tagname":"method","name":"setTarget","id":"method-setTarget"},{"owner":"tm.app.Timeline","meta":{"chainable":true},"tagname":"method","name":"to","id":"method-to"},{"owner":"tm.app.Timeline","meta":{},"tagname":"method","name":"update","id":"method-update"}],"extends":"tm.event.EventDispatcher","alternateClassNames":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/tm.event.EventDispatcher' rel='tm.event.EventDispatcher' class='docClass'>tm.event.EventDispatcher</a><div class='subclass '><strong>tm.app.Timeline</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/timeline.html#tm-app-Timeline' target='_blank'>timeline.js</a></div></pre><div class='doc-contents'><p>タイムラインクラス</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-_listeners' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/tm.event.EventDispatcher' rel='tm.event.EventDispatcher' class='defined-in docClass'>tm.event.EventDispatcher</a><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-property-_listeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.event.EventDispatcher-property-_listeners' class='name expandable'>_listeners</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Timeline'>tm.app.Timeline</span><br/><a href='source/timeline.html#tm-app-Timeline-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/tm.app.Timeline-method-constructor' class='name expandable'>tm.app.Timeline</a>( <span class='pre'>elm</span> ) : <a href=\"#!/api/tm.app.Timeline\" rel=\"tm.app.Timeline\" class=\"docClass\">tm.app.Timeline</a><span class=\"signature\"></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>elm</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.app.Timeline\" rel=\"tm.app.Timeline\" class=\"docClass\">tm.app.Timeline</a></span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href=\"#!/api/tm.event.EventDispatcher-method-constructor\" rel=\"tm.event.EventDispatcher-method-constructor\" class=\"docClass\">tm.event.EventDispatcher.constructor</a></p></div></div></div><div id='method-_addAction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Timeline'>tm.app.Timeline</span><br/><a href='source/timeline.html#tm-app-Timeline-method-_addAction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Timeline-method-_addAction' class='name expandable'>_addAction</a>( <span class='pre'>action</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>アニメーションを追加 ...</div><div class='long'><p>アニメーションを追加</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>action</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_addTween' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Timeline'>tm.app.Timeline</span><br/><a href='source/timeline.html#tm-app-Timeline-method-_addTween' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Timeline-method-_addTween' class='name expandable'>_addTween</a>( <span class='pre'>tween</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>tween を追加 ...</div><div class='long'><p>tween を追加</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tween</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_dirty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Timeline'>tm.app.Timeline</span><br/><a href='source/timeline.html#tm-app-Timeline-method-_dirty' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Timeline-method-_dirty' class='name expandable'>_dirty</a>( <span class='pre'>t</span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>@TODO ? ...</div><div class='long'><p>@TODO ?</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>t</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_updateAction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Timeline'>tm.app.Timeline</span><br/><a href='source/timeline.html#tm-app-Timeline-method-_updateAction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Timeline-method-_updateAction' class='name expandable'>_updateAction</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>@TODO ? ...</div><div class='long'><p>@TODO ?</p>\n</div></div></div><div id='method-_updateDuration' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Timeline'>tm.app.Timeline</span><br/><a href='source/timeline.html#tm-app-Timeline-method-_updateDuration' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Timeline-method-_updateDuration' class='name expandable'>_updateDuration</a>( <span class='pre'>task</span> ) : <a href=\"#!/api/tm.app.Timeline\" rel=\"tm.app.Timeline\" class=\"docClass\">tm.app.Timeline</a><span class=\"signature\"><span class='chainable' >chainable</span><span class='private' >private</span></span></div><div class='description'><div class='short'>@TODO ? ...</div><div class='long'><p>@TODO ?</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>task</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.app.Timeline\" rel=\"tm.app.Timeline\" class=\"docClass\">tm.app.Timeline</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-_updateTween' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Timeline'>tm.app.Timeline</span><br/><a href='source/timeline.html#tm-app-Timeline-method-_updateTween' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Timeline-method-_updateTween' class='name expandable'>_updateTween</a>( <span class='pre'></span> )<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>@TODO ? ...</div><div class='long'><p>@TODO ?</p>\n</div></div></div><div id='method-addEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/tm.event.EventDispatcher' rel='tm.event.EventDispatcher' class='defined-in docClass'>tm.event.EventDispatcher</a><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-method-addEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.event.EventDispatcher-method-addEventListener' class='name expandable'>addEventListener</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>on と同じ ...</div><div class='long'><p>on と同じ</p>\n</div></div></div><div id='method-by' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Timeline'>tm.app.Timeline</span><br/><a href='source/timeline.html#tm-app-Timeline-method-by' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Timeline-method-by' class='name expandable'>by</a>( <span class='pre'>props, duration, delay, func</span> ) : <a href=\"#!/api/tm.app.Timeline\" rel=\"tm.app.Timeline\" class=\"docClass\">tm.app.Timeline</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>指定した値を足した値までアニメーション ...</div><div class='long'><p>指定した値を足した値までアニメーション</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>duration</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>delay</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>func</span> : Function<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.app.Timeline\" rel=\"tm.app.Timeline\" class=\"docClass\">tm.app.Timeline</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-call' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Timeline'>tm.app.Timeline</span><br/><a href='source/timeline.html#tm-app-Timeline-method-call' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Timeline-method-call' class='name expandable'>call</a>( <span class='pre'>func, delay</span> ) : <a href=\"#!/api/tm.app.Timeline\" rel=\"tm.app.Timeline\" class=\"docClass\">tm.app.Timeline</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>関数を実行 ...</div><div class='long'><p>関数を実行</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>func</span> : Function<div class='sub-desc'>\n</div></li><li><span class='pre'>delay</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.app.Timeline\" rel=\"tm.app.Timeline\" class=\"docClass\">tm.app.Timeline</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-clear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Timeline'>tm.app.Timeline</span><br/><a href='source/timeline.html#tm-app-Timeline-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Timeline-method-clear' class='name expandable'>clear</a>( <span class='pre'></span> ) : <a href=\"#!/api/tm.app.Timeline\" rel=\"tm.app.Timeline\" class=\"docClass\">tm.app.Timeline</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>アニメーションをクリア ...</div><div class='long'><p>アニメーションをクリア</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.app.Timeline\" rel=\"tm.app.Timeline\" class=\"docClass\">tm.app.Timeline</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-clearEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/tm.event.EventDispatcher' rel='tm.event.EventDispatcher' class='defined-in docClass'>tm.event.EventDispatcher</a><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-method-clearEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.event.EventDispatcher-method-clearEventListener' class='name expandable'>clearEventListener</a>( <span class='pre'>type</span> ) : <a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>type に登録されているリスナーを全てクリア ...</div><div class='long'><p>type に登録されているリスナーを全てクリア</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-dispatchEvent' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/tm.event.EventDispatcher' rel='tm.event.EventDispatcher' class='defined-in docClass'>tm.event.EventDispatcher</a><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-method-dispatchEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.event.EventDispatcher-method-dispatchEvent' class='name expandable'>dispatchEvent</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>fire と同じ ...</div><div class='long'><p>fire と同じ</p>\n</div></div></div><div id='method-fire' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/tm.event.EventDispatcher' rel='tm.event.EventDispatcher' class='defined-in docClass'>tm.event.EventDispatcher</a><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-method-fire' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.event.EventDispatcher-method-fire' class='name expandable'>fire</a>( <span class='pre'>e</span> ) : <a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>イベント起動 ...</div><div class='long'><p>イベント起動</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-getTarget' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Timeline'>tm.app.Timeline</span><br/><a href='source/timeline.html#tm-app-Timeline-method-getTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Timeline-method-getTarget' class='name expandable'>getTarget</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>ターゲットをゲット ...</div><div class='long'><p>ターゲットをゲット</p>\n</div></div></div><div id='method-gotoAndPlay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Timeline'>tm.app.Timeline</span><br/><a href='source/timeline.html#tm-app-Timeline-method-gotoAndPlay' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Timeline-method-gotoAndPlay' class='name expandable'>gotoAndPlay</a>( <span class='pre'>frame</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>アニメーション開始\nアニメーションが終了したら再度アニメーションを行う ...</div><div class='long'><p>アニメーション開始\nアニメーションが終了したら再度アニメーションを行う</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>frame</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-gotoAndStop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Timeline'>tm.app.Timeline</span><br/><a href='source/timeline.html#tm-app-Timeline-method-gotoAndStop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Timeline-method-gotoAndStop' class='name expandable'>gotoAndStop</a>( <span class='pre'>frame</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>アニメーション開始\nアニメーションが終了したらストップする ...</div><div class='long'><p>アニメーション開始\nアニメーションが終了したらストップする</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>frame</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hasEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/tm.event.EventDispatcher' rel='tm.event.EventDispatcher' class='defined-in docClass'>tm.event.EventDispatcher</a><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-method-hasEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.event.EventDispatcher-method-hasEventListener' class='name expandable'>hasEventListener</a>( <span class='pre'>type</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>type に登録されたイベントがあるかをチェック ...</div><div class='long'><p>type に登録されたイベントがあるかをチェック</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-load' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Timeline'>tm.app.Timeline</span><br/><a href='source/timeline.html#tm-app-Timeline-method-load' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Timeline-method-load' class='name expandable'>load</a>( <span class='pre'>data</span> ) : <a href=\"#!/api/tm.app.Timeline\" rel=\"tm.app.Timeline\" class=\"docClass\">tm.app.Timeline</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>@TODO ? ...</div><div class='long'><p>@TODO ?</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.app.Timeline\" rel=\"tm.app.Timeline\" class=\"docClass\">tm.app.Timeline</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-off' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/tm.event.EventDispatcher' rel='tm.event.EventDispatcher' class='defined-in docClass'>tm.event.EventDispatcher</a><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-method-off' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.event.EventDispatcher-method-off' class='name expandable'>off</a>( <span class='pre'>type, listener</span> ) : <a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>リスナーを削除 ...</div><div class='long'><p>リスナーを削除</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>listener</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-on' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/tm.event.EventDispatcher' rel='tm.event.EventDispatcher' class='defined-in docClass'>tm.event.EventDispatcher</a><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-method-on' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.event.EventDispatcher-method-on' class='name expandable'>on</a>( <span class='pre'>type, listener</span> ) : <a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>イベントリスナー追加 ...</div><div class='long'><p>イベントリスナー追加</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>listener</span> : Object<div class='sub-desc'></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.event.EventDispatcher\" rel=\"tm.event.EventDispatcher\" class=\"docClass\">tm.event.EventDispatcher</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-removeEventListener' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/tm.event.EventDispatcher' rel='tm.event.EventDispatcher' class='defined-in docClass'>tm.event.EventDispatcher</a><br/><a href='source/eventdispatcher.html#tm-event-EventDispatcher-method-removeEventListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.event.EventDispatcher-method-removeEventListener' class='name expandable'>removeEventListener</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>off と同じ ...</div><div class='long'><p>off と同じ</p>\n</div></div></div><div id='method-set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Timeline'>tm.app.Timeline</span><br/><a href='source/timeline.html#tm-app-Timeline-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Timeline-method-set' class='name expandable'>set</a>( <span class='pre'>props, delay</span> ) : <a href=\"#!/api/tm.app.Timeline\" rel=\"tm.app.Timeline\" class=\"docClass\">tm.app.Timeline</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>プロパティをセット ...</div><div class='long'><p>プロパティをセット</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>delay</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.app.Timeline\" rel=\"tm.app.Timeline\" class=\"docClass\">tm.app.Timeline</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-setTarget' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Timeline'>tm.app.Timeline</span><br/><a href='source/timeline.html#tm-app-Timeline-method-setTarget' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Timeline-method-setTarget' class='name expandable'>setTarget</a>( <span class='pre'>target</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>ターゲットをセット ...</div><div class='long'><p>ターゲットをセット</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-to' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Timeline'>tm.app.Timeline</span><br/><a href='source/timeline.html#tm-app-Timeline-method-to' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Timeline-method-to' class='name expandable'>to</a>( <span class='pre'>props, duration, delay, func</span> ) : <a href=\"#!/api/tm.app.Timeline\" rel=\"tm.app.Timeline\" class=\"docClass\">tm.app.Timeline</a><span class=\"signature\"><span class='chainable' >chainable</span></span></div><div class='description'><div class='short'>指定した値までアニメーション ...</div><div class='long'><p>指定した値までアニメーション</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>props</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>duration</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>delay</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>func</span> : Function<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.app.Timeline\" rel=\"tm.app.Timeline\" class=\"docClass\">tm.app.Timeline</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.app.Timeline'>tm.app.Timeline</span><br/><a href='source/timeline.html#tm-app-Timeline-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.app.Timeline-method-update' class='name expandable'>update</a>( <span class='pre'>app</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>更新 ...</div><div class='long'><p>更新</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>app</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>","parentMixins":[],"mixins":[],"name":"tm.app.Timeline","id":"class-tm.app.Timeline"});