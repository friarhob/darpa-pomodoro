(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},19:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),i=n(8),r=n.n(i),u=(n(14),n(2)),o=n(3),l=n(6),c=n(4),f=n(5),m=n(1),h=(n(16),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={currentTime:(new Date).getTime()},setInterval(function(){var e=(new Date).getTime()-60*(new Date).getTimezoneOffset()*1e3;n.setState({currentTime:e})},500),n}return Object(f.a)(t,e),Object(o.a)(t,[{key:"pad",value:function(e){var t=String(e);return t.length<2&&(t="0"+t),t}},{key:"render",value:function(){var e=Math.floor(this.state.currentTime%864e5/1e3);return s.a.createElement("div",{className:"Clock"},s.a.createElement("p",null,this.pad(Math.floor(e/3600)),":",this.pad(Math.floor(e%3600/60)),":",this.pad(Math.floor(e%60))))}}]),t}(a.Component)),g=(n(19),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={value:n.props.value},n.update=n.update.bind(Object(m.a)(Object(m.a)(n))),n.offset=n.offset.bind(Object(m.a)(Object(m.a)(n))),n}return Object(f.a)(t,e),Object(o.a)(t,[{key:"offset",value:function(e){this.props.offset(e),this.setState({value:Math.max(0,parseInt(this.state.value)+e)})}},{key:"update",value:function(e){e.preventDefault(),this.props.update(e.target.value),this.setState({value:e.target.value})}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"IntegerBox"},s.a.createElement("div",{className:"number"},s.a.createElement("p",{className:"label"},this.props.label),s.a.createElement("input",{className:"value",type:"number",value:this.state.value,onChange:function(t){e.update(t)},onFocus:function(e){e.preventDefault(),e.target.select()},onClick:function(e){e.target.select()}})),s.a.createElement("div",{className:"buttons"},s.a.createElement("button",{className:"offset",onClick:function(){return e.offset(10)}},"+10"),s.a.createElement("button",{className:"offset",onClick:function(){return e.offset(5)}},"+5"),s.a.createElement("button",{className:"offset",onClick:function(){return e.offset(1)}},"+1"),s.a.createElement("button",{className:"offset",onClick:function(){return e.offset(-1)}},"-1"),s.a.createElement("button",{className:"offset",onClick:function(){return e.offset(-5)}},"-5"),s.a.createElement("button",{className:"offset",onClick:function(){return e.offset(-10)}},"-10")))}}]),t}(a.Component)),b=(n(21),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={running:{STOP:0,WORK:1,PLAY:2,LONG:3,current:0,properties:[{label:"Work",title:"Click 'Work' to Start"},{label:"Stop",title:"Work Time"},{label:"Stop",title:"Play Time"},{label:"Stop",title:"Long Rest"}],intervalFunction:null},endTime:0,remainingTime:0},n.toggleButton=n.toggleButton.bind(Object(m.a)(Object(m.a)(n))),n}return Object(f.a)(t,e),Object(o.a)(t,[{key:"pad",value:function(e){var t=String(e);return t.length<2&&(t="0"+t),t}},{key:"toggleButton",value:function(e){var t=this;e.preventDefault(),this.state.running.current==this.state.running.STOP?(this.state.running.current=this.state.running.PLAY,this.state.running.intervalFunction=setInterval(function(){(new Date).getTime()>t.state.endTime&&(t.setState({endTime:(new Date).getTime()+60*(t.state.running.current==t.state.running.WORK?t.props.breakMinutes:t.props.sessionMinutes)*1e3}),t.state.running.current=3-t.state.running.current),t.setState({remainingTime:t.state.endTime-(new Date).getTime()})},200)):(this.state.running.current=this.state.running.STOP,clearInterval(this.state.running.intervalFunction),this.state.running.intervalFunction=null,this.setState({endTime:0,remainingTime:0}))}},{key:"render",value:function(){var e=this,t=this.state.remainingTime%864e5/1e3;return s.a.createElement("div",{className:"Counter"},s.a.createElement("h1",null,this.state.running.properties[this.state.running.current].title),s.a.createElement("p",{className:"display"},this.pad(Math.floor(t/3600)),":",this.pad(Math.floor(t%3600/60)),":",this.pad(Math.floor(t%60))),s.a.createElement("button",{className:"toggle",onClick:function(t){return e.toggleButton(t)}},this.state.running.properties[this.state.running.current].label))}}]),t}(a.Component)),p=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(c.a)(t).call(this,e))).state={sessionMinutes:50,breakMinutes:10},n.offsetSessionMinutes=n.offsetSessionMinutes.bind(Object(m.a)(Object(m.a)(n))),n.updateSessionMinutes=n.updateSessionMinutes.bind(Object(m.a)(Object(m.a)(n))),n.offsetBreakMinutes=n.offsetBreakMinutes.bind(Object(m.a)(Object(m.a)(n))),n.updateBreakMinutes=n.updateBreakMinutes.bind(Object(m.a)(Object(m.a)(n))),n.toggleButton=n.toggleButton.bind(Object(m.a)(Object(m.a)(n))),n}return Object(f.a)(t,e),Object(o.a)(t,[{key:"pad",value:function(e){var t=String(e);return t.length<2&&(t="0"+t),t}},{key:"offsetSessionMinutes",value:function(e){this.setState({sessionMinutes:Math.max(0,parseInt(this.state.sessionMinutes)+e)})}},{key:"updateSessionMinutes",value:function(e){this.setState({sessionMinutes:parseInt(e)>0?parseInt(e):0})}},{key:"offsetBreakMinutes",value:function(e){this.setState({breakMinutes:Math.max(0,parseInt(this.state.breakMinutes)+e)})}},{key:"updateBreakMinutes",value:function(e){this.setState({breakMinutes:parseInt(e)>0?parseInt(e):0})}},{key:"toggleButton",value:function(e){var t=this;e.preventDefault(),this.state.running.current==this.state.running.STOP?(this.state.running.current=this.state.running.PLAY,this.state.running.intervalFunction=setInterval(function(){(new Date).getTime()>t.state.endTime&&(t.setState({endTime:(new Date).getTime()+60*(t.state.running.current==t.state.running.WORK?t.state.breakMinutes:t.state.sessionMinutes)*1e3}),t.state.running.current=3-t.state.running.current),t.setState({remainingTime:t.state.endTime-(new Date).getTime()})},200)):(this.state.running.current=this.state.running.STOP,clearInterval(this.state.running.intervalFunction),this.state.running.intervalFunction=null,this.setState({endTime:0,remainingTime:0}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement("header",null,s.a.createElement("div",{className:"Title"},s.a.createElement("h1",null,"DARPA"),s.a.createElement("h2",null,"DARPA's Another React-based Pomodoro App")),s.a.createElement("div",{className:"ClockBox"},s.a.createElement(h,null))),s.a.createElement("main",null,s.a.createElement("nav",null,s.a.createElement(g,{label:"Work time (in minutes)",value:this.state.sessionMinutes,offset:this.offsetSessionMinutes,update:this.updateSessionMinutes}),s.a.createElement(g,{label:"Play time (in minutes)",value:this.state.breakMinutes,offset:this.offsetBreakMinutes,update:this.updateBreakMinutes})),s.a.createElement("article",null,s.a.createElement(b,{sessionMinutes:this.state.sessionMinutes,breakMinutes:this.state.breakMinutes}))),s.a.createElement("footer",null,s.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/friarhob"},"Friar Hob")," wishes you all to have a great life!"))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(s.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(23)}},[[9,2,1]]]);
//# sourceMappingURL=main.61916bce.chunk.js.map