Ext.data.JsonP.tm_input_Keyboard({"autodetected":{},"meta":{},"subclasses":[],"aliases":{},"requires":[],"component":false,"files":[{"href":"keyboard.html#tm-input-Keyboard","filename":"keyboard.js"}],"tagname":"class","uses":[],"mixedInto":[],"superclasses":[],"members":[{"owner":"tm.input.Keyboard","meta":{},"tagname":"property","name":"down","id":"property-down"},{"owner":"tm.input.Keyboard","meta":{},"tagname":"property","name":"element","id":"property-element"},{"owner":"tm.input.Keyboard","meta":{},"tagname":"property","name":"key","id":"property-key"},{"owner":"tm.input.Keyboard","meta":{},"tagname":"property","name":"last","id":"property-last"},{"owner":"tm.input.Keyboard","meta":{},"tagname":"property","name":"press","id":"property-press"},{"owner":"tm.input.Keyboard","meta":{},"tagname":"property","name":"up","id":"property-up"},{"owner":"tm.input.Keyboard","meta":{},"tagname":"method","name":"constructor","id":"method-constructor"},{"owner":"tm.input.Keyboard","meta":{"private":true,"chainable":true},"tagname":"method","name":"_update","id":"method-_update"},{"owner":"tm.input.Keyboard","meta":{},"tagname":"method","name":"clearKey","id":"method-clearKey"},{"owner":"tm.input.Keyboard","meta":{},"tagname":"method","name":"getKey","id":"method-getKey"},{"owner":"tm.input.Keyboard","meta":{},"tagname":"method","name":"getKeyAngle","id":"method-getKeyAngle"},{"owner":"tm.input.Keyboard","meta":{},"tagname":"method","name":"getKeyDirection","id":"method-getKeyDirection"},{"owner":"tm.input.Keyboard","meta":{},"tagname":"method","name":"getKeyDown","id":"method-getKeyDown"},{"owner":"tm.input.Keyboard","meta":{},"tagname":"method","name":"getKeyUp","id":"method-getKeyUp"},{"owner":"tm.input.Keyboard","meta":{},"tagname":"method","name":"run","id":"method-run"},{"owner":"tm.input.Keyboard","meta":{},"tagname":"method","name":"setKey","id":"method-setKey"}],"alternateClassNames":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/keyboard.html#tm-input-Keyboard' target='_blank'>keyboard.js</a></div></pre><div class='doc-contents'><p>キーボードクラス</p>\n\n<pre class='inline-example '><code></code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-down' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Keyboard'>tm.input.Keyboard</span><br/><a href='source/keyboard.html#tm-input-Keyboard-property-down' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Keyboard-property-down' class='name expandable'>down</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>押したキー</p>\n</div><div class='long'><p>押したキー</p>\n</div></div></div><div id='property-element' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Keyboard'>tm.input.Keyboard</span><br/><a href='source/keyboard.html#tm-input-Keyboard-property-element' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Keyboard-property-element' class='name expandable'>element</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>target element</p>\n</div><div class='long'><p>target element</p>\n</div></div></div><div id='property-key' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Keyboard'>tm.input.Keyboard</span><br/><a href='source/keyboard.html#tm-input-Keyboard-property-key' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Keyboard-property-key' class='name expandable'>key</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>key</p>\n</div><div class='long'><p>key</p>\n</div></div></div><div id='property-last' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Keyboard'>tm.input.Keyboard</span><br/><a href='source/keyboard.html#tm-input-Keyboard-property-last' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Keyboard-property-last' class='name expandable'>last</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>押していたキー</p>\n</div><div class='long'><p>押していたキー</p>\n</div></div></div><div id='property-press' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Keyboard'>tm.input.Keyboard</span><br/><a href='source/keyboard.html#tm-input-Keyboard-property-press' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Keyboard-property-press' class='name expandable'>press</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>押しているキー</p>\n</div><div class='long'><p>押しているキー</p>\n</div></div></div><div id='property-up' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Keyboard'>tm.input.Keyboard</span><br/><a href='source/keyboard.html#tm-input-Keyboard-property-up' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Keyboard-property-up' class='name expandable'>up</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>離したキー</p>\n</div><div class='long'><p>離したキー</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Keyboard'>tm.input.Keyboard</span><br/><a href='source/keyboard.html#tm-input-Keyboard-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/tm.input.Keyboard-method-constructor' class='name expandable'>tm.input.Keyboard</a>( <span class='pre'></span> ) : <a href=\"#!/api/tm.input.Keyboard\" rel=\"tm.input.Keyboard\" class=\"docClass\">tm.input.Keyboard</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Test Program. ...</div><div class='long'><p><a href=\"http://tmlib-js.googlecode.com/svn/trunk/test/input/keyboard-test.html\">Test Program</a>.</p>\n\n<h3>Example</h3>\n\n<p>TM.loadScript(\"input\", \"keyboard\");</p>\n\n<p>TM.main(function() {\n    var k = TM.$Key(document);\n    k.run();\n    TM.setLoop(function(){\n        if (k.getKey('a')) { console.log(\"press 'a'!!\"); }\n    });\n});</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.input.Keyboard\" rel=\"tm.input.Keyboard\" class=\"docClass\">tm.input.Keyboard</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Keyboard'>tm.input.Keyboard</span><br/><a href='source/keyboard.html#tm-input-Keyboard-method-_update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Keyboard-method-_update' class='name expandable'>_update</a>( <span class='pre'></span> ) : <a href=\"#!/api/tm.input.Keyboard\" rel=\"tm.input.Keyboard\" class=\"docClass\">tm.input.Keyboard</a><span class=\"signature\"><span class='chainable' >chainable</span><span class='private' >private</span></span></div><div class='description'><div class='short'>情報更新処理\nマイフレーム呼んで下さい. ...</div><div class='long'><p>情報更新処理\nマイフレーム呼んで下さい.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/tm.input.Keyboard\" rel=\"tm.input.Keyboard\" class=\"docClass\">tm.input.Keyboard</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-clearKey' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Keyboard'>tm.input.Keyboard</span><br/><a href='source/keyboard.html#tm-input-Keyboard-method-clearKey' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Keyboard-method-clearKey' class='name expandable'>clearKey</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>キーを全て離したことにする ...</div><div class='long'><p>キーを全て離したことにする</p>\n</div></div></div><div id='method-getKey' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Keyboard'>tm.input.Keyboard</span><br/><a href='source/keyboard.html#tm-input-Keyboard-method-getKey' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Keyboard-method-getKey' class='name expandable'>getKey</a>( <span class='pre'>key</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>キーを押しているかをチェック ...</div><div class='long'><p>キーを押しているかをチェック</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Number/String<div class='sub-desc'><p>keyCode or keyName</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>チェック結果</p>\n</div></li></ul></div></div></div><div id='method-getKeyAngle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Keyboard'>tm.input.Keyboard</span><br/><a href='source/keyboard.html#tm-input-Keyboard-method-getKeyAngle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Keyboard-method-getKeyAngle' class='name expandable'>getKeyAngle</a>( <span class='pre'></span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>キーの方向を Angle(Degree) で取得 ...</div><div class='long'><p>キーの方向を Angle(Degree) で取得</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>角度(Degree)</p>\n</div></li></ul></div></div></div><div id='method-getKeyDirection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Keyboard'>tm.input.Keyboard</span><br/><a href='source/keyboard.html#tm-input-Keyboard-method-getKeyDirection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Keyboard-method-getKeyDirection' class='name expandable'>getKeyDirection</a>( <span class='pre'></span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>キーの押している向きを取得\n正規化されている ...</div><div class='long'><p>キーの押している向きを取得\n正規化されている</p>\n</div></div></div><div id='method-getKeyDown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Keyboard'>tm.input.Keyboard</span><br/><a href='source/keyboard.html#tm-input-Keyboard-method-getKeyDown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Keyboard-method-getKeyDown' class='name expandable'>getKeyDown</a>( <span class='pre'>key</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>キーを押したかをチェック ...</div><div class='long'><p>キーを押したかをチェック</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Number/String<div class='sub-desc'><p>keyCode or keyName</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>チェック結果</p>\n</div></li></ul></div></div></div><div id='method-getKeyUp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Keyboard'>tm.input.Keyboard</span><br/><a href='source/keyboard.html#tm-input-Keyboard-method-getKeyUp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Keyboard-method-getKeyUp' class='name expandable'>getKeyUp</a>( <span class='pre'>key</span> ) : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>キーを離したかをチェック ...</div><div class='long'><p>キーを離したかをチェック</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Number/String<div class='sub-desc'><p>keyCode or keyName</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>チェック結果</p>\n</div></li></ul></div></div></div><div id='method-run' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Keyboard'>tm.input.Keyboard</span><br/><a href='source/keyboard.html#tm-input-Keyboard-method-run' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Keyboard-method-run' class='name expandable'>run</a>( <span class='pre'>fps</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>run. ...</div><div class='long'><p>run.\n自動でマウス情報を更新したい際に使用する</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fps</span> : Object<div class='sub-desc'></div></li></ul></div></div></div><div id='method-setKey' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='tm.input.Keyboard'>tm.input.Keyboard</span><br/><a href='source/keyboard.html#tm-input-Keyboard-method-setKey' target='_blank' class='view-source'>view source</a></div><a href='#!/api/tm.input.Keyboard-method-setKey' class='name expandable'>setKey</a>( <span class='pre'>key, flag</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>キーの状態を設定する ...</div><div class='long'><p>キーの状態を設定する</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : Object<div class='sub-desc'></div></li><li><span class='pre'>flag</span> : Object<div class='sub-desc'></div></li></ul></div></div></div></div></div></div></div>","parentMixins":[],"mixins":[],"name":"tm.input.Keyboard","id":"class-tm.input.Keyboard"});