goog.provide('domina.events');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.events');
/**
* returns true if the node(child) is a child of parent
*/
domina.events.child_of_QMARK_ = (function child_of_QMARK_(parent,child){
while(true){
if(cljs.core.truth_(cljs.core.not.call(null,child)))
{return false;
} else
{if(cljs.core.truth_((parent === child)))
{return false;
} else
{if(cljs.core.truth_((child.parentNode === parent)))
{return true;
} else
{if(cljs.core.truth_("﷐'else"))
{{
var G__15644 = parent;
var G__15645 = child.parentNode;
parent = G__15644;
child = G__15645;
continue;
}
} else
{return null;
}
}
}
}
break;
}
});
/**
* this is used to build cross browser versions of :mouseenter and :mouseleave events
*/
domina.events.mouse_enter_leave = (function mouse_enter_leave(func){
return (function (e){
var re__15648 = e.relatedTarget;
var this$__15649 = e.currentTarget;

if(cljs.core.truth_((function (){var and__3546__auto____15650 = cljs.core.not.call(null,(re__15648 === this$__15649));

if(cljs.core.truth_(and__3546__auto____15650))
{return cljs.core.not.call(null,domina.events.child_of_QMARK_.call(null,this$__15649,re__15648));
} else
{return and__3546__auto____15650;
}
})()))
{return func.call(null,e);
} else
{return null;
}
});
});
/**
* Generic event wrapper that handles listening and cleanup of wrapped events
*/
domina.events.gen_wrapper = (function gen_wrapper(event_key,wrapped_key,wrapper_func){
var obj__15652 = (new Object());
var wevent__15653 = cljs.core.name.call(null,wrapped_key);
var event__15654 = cljs.core.name.call(null,event_key);

obj__15652.wrapped_event = wevent__15653;
obj__15652.event = event__15654;
obj__15652.listen = (function (elm,func,capture,opt_scope,opt_handler){
var callback__15655 = wrapper_func.call(null,func);

callback__15655.listen = func;
callback__15655.scope = opt_scope;
callback__15655.event = event__15654;
callback__15655.capture = capture;
if(cljs.core.truth_(domina.events.op_handler))
{return opt_handler.listen(elm,wevent__15653,callback__15655,capture);
} else
{return goog.events.listen.call(null,elm,wevent__15653,callback__15655,capture);
}
});
obj__15652.unlisten = (function (elm,func,capture,opt_scope,opt_handler){
var listeners__15658 = (cljs.core.truth_(cljs.core._EQ_.call(null,capture,undefined))?cljs.core.concat.call(null,goog.events.getListeners.call(null,elm,wevent__15653,false),goog.events.getListeners.call(null,elm,wevent__15653,true)):goog.events.getListeners.call(null,elm,wevent__15653,capture));

return cljs.core.dorun.call(null,cljs.core.map.call(null,(function (obj){
var listener__15661 = obj.listener;
var lfunc__15662 = listener__15661.listen;
var scope__15664 = listener__15661.scope;
var capture__15665 = listener__15661.capture;

if(cljs.core.truth_((function (){var and__3546__auto____15669 = (function (){var or__3548__auto____15668 = cljs.core.not.call(null,func);

if(cljs.core.truth_(or__3548__auto____15668))
{return or__3548__auto____15668;
} else
{return cljs.core._EQ_.call(null,lfunc__15662,func);
}
})();

if(cljs.core.truth_(and__3546__auto____15669))
{var or__3548__auto____15671 = cljs.core.not.call(null,opt_scope);

if(cljs.core.truth_(or__3548__auto____15671))
{return or__3548__auto____15671;
} else
{return cljs.core._EQ_.call(null,scope__15664,opt_scope);
}
} else
{return and__3546__auto____15669;
}
})()))
{if(cljs.core.truth_(opt_handler))
{return opt_handler.unlisten(elm,wevent__15653,listener__15661,capture__15665);
} else
{return goog.events.unlisten.call(null,elm,wevent__15653,listener__15661,capture__15665);
}
} else
{return null;
}
}),listeners__15658));
});
return obj__15652;
});
domina.events.wrapper_register = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
domina.events.reg_event_wrapper_BANG_ = (function reg_event_wrapper_BANG_(event_key,wrapped_key,wrapper_func){
return cljs.core.swap_BANG_.call(null,domina.events.wrapper_register,cljs.core.assoc,event_key,domina.events.gen_wrapper.call(null,event_key,wrapped_key,wrapper_func));
});
/**
* adding an event to the selected nodes
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___15698 = (function (nds,event,func){
return listen_BANG_.call(null,nds,event,func,false);
});
var listen_BANG___15699 = (function (nds,event,func,capture){
var wrapper__15680 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15681__15682 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15681__15682))
{var node__15683 = cljs.core.first.call(null,G__15681__15682);
var G__15681__15684 = G__15681__15682;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15680)))
{goog.events.listen.call(null,node__15683,cljs.core.name.call(null,event),func,capture);
} else
{goog.events.listenWithWrapper.call(null,node__15683,wrapper__15680,func,capture);
}
var temp__3698__auto____15689 = cljs.core.next.call(null,G__15681__15684);

if(cljs.core.truth_(temp__3698__auto____15689))
{var G__15681__15691 = temp__3698__auto____15689;

{
var G__15710 = cljs.core.first.call(null,G__15681__15691);
var G__15711 = G__15681__15691;
node__15683 = G__15710;
G__15681__15684 = G__15711;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
listen_BANG_ = function(nds,event,func,capture){
switch(arguments.length){
case  3 :
return listen_BANG___15698.call(this,nds,event,func);
case  4 :
return listen_BANG___15699.call(this,nds,event,func,capture);
}
throw('Invalid arity: ' + arguments.length);
};
return listen_BANG_;
})()
;
/**
* removing a specific event from the selected nodes
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___15813 = (function (nds,event,func){
return unlisten_BANG_.call(null,nds,event,func,false);
});
var unlisten_BANG___15814 = (function (nds,event,func,capture){
var wrapper__15719 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);

var G__15721__15723 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15721__15723))
{var node__15725 = cljs.core.first.call(null,G__15721__15723);
var G__15721__15727 = G__15721__15723;

while(true){
if(cljs.core.truth_(cljs.core.nil_QMARK_.call(null,wrapper__15719)))
{goog.events.unlisten.call(null,node__15725,cljs.core.name.call(null,event),func,capture);
} else
{wrapper__15719.unlisten(node__15725,func,capture);
}
var temp__3698__auto____15733 = cljs.core.next.call(null,G__15721__15727);

if(cljs.core.truth_(temp__3698__auto____15733))
{var G__15721__15792 = temp__3698__auto____15733;

{
var G__15818 = cljs.core.first.call(null,G__15721__15792);
var G__15819 = G__15721__15792;
node__15725 = G__15818;
G__15721__15727 = G__15819;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
unlisten_BANG_ = function(nds,event,func,capture){
switch(arguments.length){
case  3 :
return unlisten_BANG___15813.call(this,nds,event,func);
case  4 :
return unlisten_BANG___15814.call(this,nds,event,func,capture);
}
throw('Invalid arity: ' + arguments.length);
};
return unlisten_BANG_;
})()
;
/**
* removes all listeners for a given set of events on the selected nodes
* @param {...*} var_args
*/
domina.events.remove_listeners_BANG_ = (function() { 
var remove_listeners_BANG___delegate = function (nds,event_list){
var G__15825__15828 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15825__15828))
{var node__15829 = cljs.core.first.call(null,G__15825__15828);
var G__15825__15830 = G__15825__15828;

while(true){
var map_func__15835 = ((function (node__15829,G__15825__15830){
return (function (p1__15715_SHARP_){
var wrapper__15832 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,p1__15715_SHARP_);

if(cljs.core.truth_(wrapper__15832))
{return wrapper__15832.unlisten(node__15829);
} else
{return goog.events.removeAll.call(null,node__15829,cljs.core.name.call(null,p1__15715_SHARP_));
}
});})(node__15829,G__15825__15830))
;

cljs.core.doall.call(null,cljs.core.map.call(null,map_func__15835,event_list));
var temp__3698__auto____15841 = cljs.core.next.call(null,G__15825__15830);

if(cljs.core.truth_(temp__3698__auto____15841))
{var G__15825__15842 = temp__3698__auto____15841;

{
var G__15846 = cljs.core.first.call(null,G__15825__15842);
var G__15848 = G__15825__15842;
node__15829 = G__15846;
G__15825__15830 = G__15848;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
};
var remove_listeners_BANG_ = function (nds,var_args){
var event_list = null;
if (goog.isDef(var_args)) {
  event_list = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return remove_listeners_BANG___delegate.call(this, nds, event_list);
};
remove_listeners_BANG_.cljs$lang$maxFixedArity = 1;
remove_listeners_BANG_.cljs$lang$applyTo = (function (arglist__15850){
var nds = cljs.core.first(arglist__15850);
var event_list = cljs.core.rest(arglist__15850);
return remove_listeners_BANG___delegate.call(this, nds, event_list);
});
return remove_listeners_BANG_;
})()
;
/**
* fires the listeners attached to a set of nodes
*/
domina.events.fire_listeners_BANG_ = (function fire_listeners_BANG_(nds,event,capture,event_map){
var wrapper__15851 = cljs.core.deref.call(null,domina.events.wrapper_register).call(null,event);
var nevent__15853 = (cljs.core.truth_(wrapper__15851)?wrapper__15851.wrapped_event:cljs.core.name.call(null,event));
var event_obj__15854 = (new goog.events.Event(event_map.call(null,"﷐'type"),event_map.call(null,"﷐'target")));

event_obj__15854.relatedTarget = event_map.call(null,"﷐'related-target");
var G__15856__15857 = cljs.core.seq.call(null,domina.nodes.call(null,nds));

if(cljs.core.truth_(G__15856__15857))
{var node__15858 = cljs.core.first.call(null,G__15856__15857);
var G__15856__15859 = G__15856__15857;

while(true){
goog.events.fireListeners.call(null,node__15858,nevent__15853,capture,event_obj__15854);
var temp__3698__auto____15860 = cljs.core.next.call(null,G__15856__15859);

if(cljs.core.truth_(temp__3698__auto____15860))
{var G__15856__15861 = temp__3698__auto____15860;

{
var G__15862 = cljs.core.first.call(null,G__15856__15861);
var G__15863 = G__15856__15861;
node__15858 = G__15862;
G__15856__15859 = G__15863;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
domina.events.reg_event_wrapper_BANG_.call(null,"﷐'mouseenter","﷐'mouseover",domina.events.mouse_enter_leave);
domina.events.reg_event_wrapper_BANG_.call(null,"﷐'mouseleave","﷐'mouseout",domina.events.mouse_enter_leave);
