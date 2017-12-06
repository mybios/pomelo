
import { ChannelService } from "./ChannelService";
import { rpc } from "../../src/common/protocol/rpc";

/**
 * Application
 */
export declare class Application
{
	/**
	 * Get application base path
	 *
	 *  // cwd: /home/game/
	 *  pomelo start
	 *  // app.getBase() -> /home/game
	 *
	 * @return {string} application base path
	 *
	 */
	getBase(): string;

	/**
	 * add a filter to before and after filter
	 *
	 * @param {Object} filter provide before and after filter method.
	 *                        A filter should have two methods: before and after.         
	 */
	filter(filter: Object): void;

	/**
	 * Add before filter.
	 *
	 * @param {Object|Function} bf before fileter, bf(msg, session, next)
	 */
	before(bf: Object | ((msg: Object, session: Session, next: (err?: Error) => void) => any)): void;

	/**
	 * Add after filter.
	 *
	 * @param {Object|Function} af after filter, `af(err, msg, session, resp, next)`         
	 */
	after(af: Object | ((err: Error, msg: Object, session: Session, resp: Object, next: (err?: Error) => void) => any)): void;

	/**
	 * add a global filter to before and after global filter
	 *
	 * @param {Object} filter provide before and after filter method.
	 *                        A filter should have two methods: before and after.         
	 */
	globalFilter(filter: Object): void;

	/**
	 * Add global before filter.
	 *
	 * @param {Object|Function} bf before fileter, bf(msg, session, next)         
	 */
	globalBefore(bf: Object | ((msg: Object, session: Session, next: (err?: Error) => void) => any)): void;

	/**
	 * Add global after filter.
	 *
	 * @param {Object|Function} af after filter, `af(err, msg, session, resp, next)`         
	 */
	globalAfter(af: Object | ((err: Error, msg: Object, session: Session, resp: Object, next: (err?: Error) => void) => any)): void;

	/**
	 * Add rpc before filter.
	 *
	 * @param {Object|Function} bf before fileter, bf(serverId, msg, opts, next)         
	 */
	rpcBefore(bf: Object | ((serverId: string, msg: Object, opts: Object, next: Function) => any)): void;

	/**
	 * Add rpc after filter.
	 *
	 * @param {Object|Function} af after filter, `af(serverId, msg, opts, next)`         
	 */
	rpcAfter(af: Object | ((serverId: string, msg: Object, opts: Object, next: Function) => any)): void;

	/**
	 * add a rpc filter to before and after rpc filter
	 *
	 * @param {Object} filter provide before and after filter method.
	 *                        A filter should have two methods: before and after.         
	 */
	rpcFilter(filter: Object): void;

	/**
	 * Load component
	 *
	 * @param  {string} name    (optional) name of the component
	 * @param  {Object} component component instance or factory function of the component
	 * @param  {[type]} opts    (optional) construct parameters for the factory function
	 * @return {Object}     app instance for chain invoke         
	 */
	load(name: string, component: Object, opts?: any): Object;

	/**
	 * Load component
	 *         
	 * @param  {Object} component component instance or factory function of the component
	 * @param  {[type]} opts    (optional) construct parameters for the factory function
	 * @return {Object}     app instance for chain invoke         
	 */
	load(component: Object, opts?: any): Object;

	/**
	 * Load Configure json file to settings.
	 *
	 * @param {string} key environment key
	 * @param {string} val environment value
	 * @return {Server|Mixed} for chaining, or the setting value
	 */
	loadConfig(key: string, val: string): any;

	/**
	 * Set the route function for the specified server type.
	 *
	 * Examples:
	 *
	 *  app.route('area', routeFunc);
	 *
	 *  var routeFunc = function(session, msg, app, cb) {
	 *    // all request to area would be route to the first area server
	 *    var areas = app.getServersByType('area');
	 *    cb(null, areas[0].id);
	 *  };
	 *
	 * @param  {string} serverType server type string
	 * @param  {Function} routeFunc  route function. routeFunc(session, msg, app, cb)
	 * @return {Object}     current application instance for chain invoking         
	 */
	route(kserverTypeey: string, routeFunc: (routeKey: any, msg: Object, app: Application, cb: (err: Error | null, responseServerId: string) => void) => void): Object;

	/**
	 * Set before stop function. It would perform before servers stop.
	 *
	 * @param  {Function} fun before close function
	 * @return {Void}         
	 */
	beforeStopHook(fun: Function): void;

	/**
	 * Start application. It would load the default components and start all the loaded components.
	 *
	 * @param  {Function} cb callback function
	 */
	start(cb?: Function): void;
	astart(): Promise<void>;

	/**
	 * Stop components.
	 *
	 * @param  {Boolean} force whether stop the app immediately
	 */
	stop(force: boolean): void;
	
	/**
	 * Assign `setting` to `val`, or return `setting`'s value.
	 *
	 * Example:
	 *
	 *  app.set('key1', 'value1');
	 *  app.get('key1');  // 'value1'
	 *  app.key1;         // undefined
	 *
	 *  app.set('key2', 'value2', true);
	 *  app.get('key2');  // 'value2'
	 *  app.key2;         // 'value2'
	 *
	 * @param {string} setting the setting of application
	 * @param {string} val the setting's value
	 * @param {boolean} attach whether attach the settings to application
	 * @return {Server|Mixed} for chaining, or the setting value         
	 */
    set(setting: "channelConfig", val: ChannelServiceOption, attach?: boolean): Application;
    set(setting: string, val: string | any, attach?: boolean): Application;

	/**
	 * Get property from setting
	 *
	 * @param {string} setting application setting
	 * @return {string} val         
	 */
	get(setting: "channelService"): ChannelService;
	get(setting: string): string | any;

	/**
	 * Check if `setting` is enabled.
	 *
	 * @param {string} setting application setting
	 * @return {boolean}         
	 */
	enabled(setting: string): boolean;

	/**
	 * Check if `setting` is disabled.
	 *
	 * @param {string} setting application setting
	 * @return {boolean}
	 */
	disabled(setting: string): boolean;

	/**
	 * Enable `setting`.
	 *
	 * @param {string} setting application setting
	 * @return {app} for chaining         
	 */
	enable(setting: string | 'rpcDebugLog'): Application;

	/**
	 * Disable `setting`.
	 *
	 * @param {string} setting application setting
	 * @return {app} for chaining
	 */
	disable(setting: string | 'rpcDebugLog'): Application;

	/**
	 * Configure callback for the specified env and server type.
	 * When no env is specified that callback will
	 * be invoked for all environments and when no type is specified
	 * that callback will be invoked for all server types.
	 *
	 * Examples:
	 *
	 *  app.configure(function(){
	 *    // executed for all envs and server types
	 *  });
	 *
	 *  app.configure('development', function(){
	 *    // executed development env
	 *  });
	 *
	 *  app.configure('development', 'connector', function(){
	 *    // executed for development env and connector server type
	 *  });
	 *
	 * @param {string} env application environment
	 * @param {Function} fn callback function
	 * @param {string} type server type
	 * @return {Application} for chaining         
	 */
	configure(env: string, type: string, fn: () => any): Application;
	aconfigure(env: string, type: string): Promise<void>;
	/**
	 * Configure callback for the specified env and server type.
	 * When no env is specified that callback will
	 * be invoked for all environments and when no type is specified
	 * that callback will be invoked for all server types.
	 *
	 * Examples:
	 *
	 *  app.configure(function(){
	 *    // executed for all envs and server types
	 *  });
	 *
	 *  app.configure('development', function(){
	 *    // executed development env
	 *  });
	 *
	 *  app.configure('development', 'connector', function(){
	 *    // executed for development env and connector server type
	 *  });
	 *
	 * @param {string} env application environment
	 * @param {Function} fn callback function
	 * @param {string} type server type
	 * @return {Application} for chaining         
	 */
	configure(env: string, fn: () => any): Application;
	aconfigure(env: string): Promise<void>;
	/**
	 * Configure callback for the specified env and server type.
	 * When no env is specified that callback will
	 * be invoked for all environments and when no type is specified
	 * that callback will be invoked for all server types.
	 *
	 * Examples:
	 *
	 *  app.configure(function(){
	 *    // executed for all envs and server types
	 *  });
	 *
	 *  app.configure('development', function(){
	 *    // executed development env
	 *  });
	 *
	 *  app.configure('development', 'connector', function(){
	 *    // executed for development env and connector server type
	 *  });
	 *
	 * @param {string} env application environment
	 * @param {Function} fn callback function
	 * @param {string} type server type
	 * @return {Application} for chaining         
	 */
	configure(fn: () => any): Application;
	aconfigure(): Promise<void>;

	/**
	 * Register admin modules. Admin modules is the extends point of the monitor system.
	 *
	 * @param {string} moduleId (optional) module id or provoided by module.moduleId
	 * @param {Object} module module object or factory function for module
	 * @param {Object} opts construct parameter for module         
	 */
	registerAdmin(moduleId: string, module: Object, opts: Object): void;

	/**
	 * Use plugin.
	 *
	 * @param  {Object} plugin plugin instance
	 * @param  {[type]} opts    (optional) construct parameters for the factory function         
	 */
	use(plugin: Object, opts?: any): void;

	/**
	 * Application transaction. Transcation includes conditions and handlers, if conditions are satisfied, handlers would be executed.
	 * And you can set retry times to execute handlers. The transaction log is in file logs/transaction.log.
	 *
	 * @param {string} name transaction name
	 * @param {Object} conditions functions which are called before transaction
	 * @param {Object} handlers functions which are called during transaction
	 * @param {number} retry retry times to execute handlers if conditions are successfully executed
	 */
	transaction(name: string, conditions: Object, handlers: Object, retry: number): void;

	/**
	 * Get master server info.
	 *
	 * @return {Object} master server info, {id, host, port} 
	 */
	getMaster(): MasterInfo;

	/**
	 * Get current server info.
	 *
	 * @return {Object} current server info, {id, serverType, host, port}         
	 */
	getCurServer(): ServerInfo;

	/**
	 * Get current server id.
	 *
	 * @return {string} current server id from servers.json         
	 */
	getServerId(): string;

	/**
	 * Get current server type.
	 *
	 * @return {string} current server type from servers.json         
	 */
	getServerType(): string;

	/**
	 * Get all the current server infos.
	 *
	 * @return {Object} server info map, key: server id, value: server info         
	 */
	getServers(): Object;

	/**
	 * Get all server infos from servers.json.
	 *
	 * @return {Object} server info map, key: server id, value: server info         
	 */
	getServersFromConfig(): Object;

	/**
	 * Get all the server type.
	 *
	 * @return {Array} server type list         
	 */
	getServerTypes(): (string)[];

	/**
	 * Get server info by server id from current server cluster.
	 *
	 * @param  {string} serverId server id
	 * @return {Object} server info or undefined
	 */
	getServerById(serverId: string): ServerInfo;

	/**
	 * Get server info by server id from servers.json.
	 *
	 * @param  {string} serverId server id
	 * @return {Object} server info or undefined         
	 */
	getServerFromConfig(serverId: string): ServerInfo;

	/**
	 * Get server infos by server type.
	 *
	 * @param  {string} serverType server type
	 * @return {Array}      server info list
	 */
	getServersByType(serverType: string): ServerInfo[];

	/**
	 * Check the server whether is a frontend server
	 *
	 * @param  {server}  server server info. it would check current server
	 *            if server not specified
	 * @return {boolean}
	 */
	isFrontend(server: ServerInfo): boolean;

	/**
	 * Check the server whether is a backend server
	 *
	 * @param  {server}  server server info. it would check current server
	 *            if server not specified
	 * @return {boolean}
	 */
	isBackend(server: ServerInfo): boolean;

	/**
	 * Check whether current server is a master server
	 *
	 * @return {boolean}
	 */
	isMaster(): boolean;

	/**
	 * Add new server info to current application in runtime.
	 *
	 * @param {Array} servers new server info list         
	 */
	addServers(servers: ServerInfo[]): void;

	/**
	 * Remove server info from current application at runtime.
	 *
	 * @param  {Array} ids server id list         
	 */
	removeServers(servers: string[]): void;

	/**
	 * Replace server info from current application at runtime.
	 *
	 * @param  {Object} servers id map
	 */
	replaceServers(servers: Object): void;

	/**
	 * Add crons from current application at runtime.
	 *
	 * @param  {Array} crons new crons would be added in application         
	 */
	addCrons(crons: any): void;

	/**
	 * Remove crons from current application at runtime.
	 *
	 * @param  {Array} crons old crons would be removed in application
	 */
	removeCrons(crons: any): void;

	backendSessionService: BackendSessionService;
	sessionService: SessionService;

	rpc: rpc;
}

/**
 * BackendSessionService
 * Service that maintains backend sessions and the communiation with frontend servers.
 * BackendSessionService would be created in each server process and maintains backend sessions for current process and communicates with the relative frontend servers.
 * BackendSessionService instance could be accessed by app.get('backendSessionService') or app.backendSessionService.
 */
export declare interface BackendSessionService
{
	/**
	 * Get backend session by frontend server id and session id.
	 *
	 * @param  {string}   frontendId frontend server id that session attached
	 * @param  {string}   sid        session id
	 * @param  {Function} cb         callback function. args: cb(err, BackendSession)         
	 */
	get(frontendId: string, sid: string, cb: Function): void;
	aget(frontendId: string, sid: string): Promise<BackendSession>;

	/**
	 * Get backend sessions by frontend server id and user id.
	 *
	 * @param  {string}   frontendId frontend server id that session attached
	 * @param  {string}   uid        user id binded with the session
	 * @param  {Function} cb         callback function. args: cb(err, BackendSessions)
	 */
	getByUid(frontendId: string, uid: string, cb: Function): void;
	agetByUid(frontendId: string, uid: string): Promise<BackendSession[]>;

	/**
	 * Kick a session by session id.
	 *
	 * @param  {string}   frontendId cooperating frontend server id
	 * @param  {string}   sid        session id
	 * @param  {Function} cb         callback function
	 */
	kickBySid(frontendId: string, sid: string, cb: Function): void;
	akickBySid(frontendId: string, sid: string): Promise<void>;

	/**
	 * Kick sessions by user id.
	 *
	 * @param  {string}          frontendId cooperating frontend server id
	 * @param  {string}   uid        user id
	 * @param  {string}          reason     kick reason
	 * @param  {Function}        cb         callback function
	 */
	kickByUid(frontendId: string, uid: string, reason: string, cb: Function): void;
	akickByUid(frontendId: string, uid: string, reason: string): Promise<void>;
}

/**
 * BackendSession
 * BackendSession is the proxy for the frontend internal session passed to handlers and it helps to keep the key/value pairs for the server locally. 
 * Internal session locates in frontend server and should not be accessed directly.
 * The mainly operation on backend session should be read and any changes happen in backend session is local and would be discarded in next request. 
 * You have to push the changes to the frontend manually if necessary. 
 * Any push would overwrite the last push of the same key silently and the changes would be saw in next request. 
 * And you have to make sure the transaction outside if you would push the session concurrently in different processes.
 */
export declare interface BackendSession
{

	/**
	 * Bind current session with the user id. It would push the uid to frontend
	 * server and bind  uid to the frontend internal session.
	 *
	 * @param  {string}   uid user id
	 * @param  {Function} cb  callback function
	 */
	bind(uid: string, cb: Function): void;
	abind(uid: string): Promise<void>;

	/**
	 * Unbind current session with the user id. It would push the uid to frontend
	 * server and unbind uid from the frontend internal session.
	 *
	 * @param  {string}   uid user id
	 * @param  {Function} cb  callback function
	 */
	unbind(uid: string, cb: Function): void;
	aunbind(uid: string): Promise<void>;

	/**
	 * Set the key/value into backend session.
	 *
	 * @param {string} key   key
	 * @param {Object} value value
	 */
	set(key: string, value: Object): void;

	/**
	 * Get the value from backend session by key.
	 *
	 * @param  {string} key key
	 * @return {Object}     value
	 */
	get(key: string): Object;

	/**
	 * Push the key/value in backend session to the front internal session.
	 *
	 * @param  {string}   key key
	 * @param  {Function} cb  callback function
	 */
	push(key: string, cb: Function): void;
	apush(key: string): Promise<void>;

	/**
	 * Push all the key/values in backend session to the frontend internal session.
	 *
	 * @param  {Function} cb callback function
	 */
	pushAll(cb: Function): void;
	apushAll(cb: Function): Promise<void>;

    readonly id: number;
    readonly frontendId: string;
    readonly uid: string;
}

/**
 * SessionService
 * Session service maintains the internal session for each client connection.
 * Session service is created by session component and is only available in frontend servers. 
 * You can access the service by app.get('sessionService') or app.sessionService in frontend servers.
 */
export declare interface SessionService
{

	/**
	 * Get sessions by userId.
	 *
	 * @param {string} uid User id associated with the session
	 * @return {Array} list of session binded with the uid
	 */
	getByUid(uid: string): (Session | FrontendSession)[];

	/**
	 * Kick all the session offline under the user id.
	 *
	 * @param {string}   uid user id asscociated with the session
	 * @param {Function} cb  callback function         
	 */
	kick(uid: string, cb: Function): void;
	akick(uid: string): Promise<void>;

	/**
	 * Kick a user offline by session id.
	 *
	 * @param {string}   sid session id
	 * @param {Function} cb  callback function         
	 */
	kickBySessionId(sid: string, cb: Function): void;
	akickBySessionId(sid: string): Promise<void>;
}

/**
 * Session maintains the relationship between client connection and user information.
 * There is a session associated with each client connection. And it should bind to a
 * user id after the client passes the identification.
 *
 * Session is created in frontend server and should not be accessed in handler.
 * There is a proxy class called BackendSession in backend servers and FrontendSession 
 * in frontend servers.
 */
export declare interface Session
{

	/**
	 * Bind the session with the the uid.
	 *
	 * @param {string} uid User id         
	 */
	bind(uid: string): void;

	/**
	 * Unbind the session with the the uid.
	 *
	 * @param {string} uid User id         
	 */
	unbind(uid: string): void;

	/**
	 * Set values (one or many) for the session.
	 *
	 * @param {string|Object} key session key
	 * @param {Object} value session value
	 */
	set(key: string | Object, value: Object): void;

	/**
	 * Remove value from the session.
	 *
	 * @param {string} key session key         
	 */
	remove(key: string): void;

	/**
	 * Get value from the session.
	 *
	 * @param {string} key session key
	 * @return {Object} value associated with session key
	 */
	get(key: string): any;

	/**
	 * Send message to the session.
	 *
	 * @param  {Object} msg final message sent to client
	 */
	send(msg: any): void;

	/**
	 * Send message to the session in batch.
	 *
	 * @param  {Array} msgs list of message
	 */
	sendBatch(msgs: any[]): void;

}

/**
 * Frontend session for frontend server.
 */
export declare class FrontendSession
{
	/**
	 * Bind the session with the the uid.
	 *
	 * @param {string} uid User id   
	 * @param {Function} cb callback      
	 */
	bind(uid: string, cb?: Function): void;
	abind(uid: string): Promise<void>;

	/**
	 * Unbind the session with the the uid.
	 *
	 * @param {string} uid User id      
	 * @param {Function} cb callback         
	 */
	unbind(uid: string, cb?: Function): void;
	aunbind(uid: string): Promise<void>;

	/**
	 * Set values (one or many) for the session.
	 *
	 * @param {string|Object} key session key
	 * @param {Object} value session value
	 */
	set(key: string | Object, value: Object): void;

	/**
	 * Get value from the session.
	 *
	 * @param {string} key session key
	 * @return {Object} value associated with session key
	 */
	get(key: string): any;

	/**
	 * push
	 * 
	 * @param {string} key session key
	 * @param {Function} cb callback
	 */
	push(key: string, cb: (err: Error) => void): void;
	apush(key: string): Promise<void>;

	/**
	 * listener
	 * 
	 * @param {string} event event name
	 * @param {Function} listener listener event function
	 */
	on(event: "bind", listener: (session: FrontendSession, uid: string) => void): void;
	on(event: "unbind", listener: (session: FrontendSession, uid: string) => void): void;
	on(event: "closed", listener: (session: FrontendSession, reason: string) => void): void;


	pushAll(listener: Function): void;
	apushAll(): Promise<void>;

    readonly id: number;
    readonly frontendId: string;
    readonly uid: string;
}

/**
 * master server info
 */
export declare interface MasterInfo
{
	id: string;
	host: any;
	port: any;
}

/**
 * ServerInfo
 */
export declare interface ServerInfo
{
	id: string;
	serverType: string;
	host: string;
	port: number;
	clientHost: string;
	clientPort: number;
}

/**
 * Connector
 */
export declare interface Connector
{
	sioconnector: any;
	hybridconnector: any;
	udpconnector: any;
	mqttconnector: any;
}

/**
 * PushScheduler
 */
export declare interface PushScheduler
{
	direct: any;
	buffer: any;
}

// export declare class Lifecycle {
// 	module.exports.beforeStartup = function(app, cb) {  
// 		// do some operations before application start up  
// 		cb();  
// 	};  


// 	module.exports.afterStartup = function(app, cb) {  
// 		// do some operations after application start up  
// 		cb();  
// 	};  


// 	module.exports.beforeShutdown = function(app, cb) {  
// 		// do some operations before application shutdown down  
// 		cb();  
// 	};  


// 	module.exports.afterStartAll = function(app) {  
// 		// do some operations after all applications start up  
// 	};  
// }


export var version: any;
export var events: any;
export var components: any;
export var filters: any;
export var rpcFilters: any;
export var connectors: Connector;
export var pushSchedulers: PushScheduler;

/**
 * Create an pomelo application.
 * 
 * @return {Application} application
 */
export function createApp(opts ?: any): Application;

export function timeout(): any;

/** 
* 存储虚接口
*/
export interface IStore
{
    add(key: string, value: string, done: (err?: Error) => void): void;
    remove(key: string, value: string, done: (err?: Error) => void): void;
    load(key: string, done: (err?: Error , list ?: Array<string>) => void): void;
    removeAll(key: string, done: (err?: Error) => void): void;
}

/** 
* ChannelService的可选参数
*/
export interface ChannelServiceOption
{
    prefix?: string;
    store?: IStore;
}

export * from "./ChannelService"
export * from "./AsyncChannelService"