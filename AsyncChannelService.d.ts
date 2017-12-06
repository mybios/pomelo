
/**
 * ChannelService
 * Create and maintain channels for server local.
 * ChannelService is created by channel component which is a default loaded component of pomelo and channel service would be accessed by app.get('channelService').
 */
export declare interface IAsyncChannelService
{

	/**
	 * Create channel with name.
	 *
	 * @param {string} name channel's name
	 * @return {Channel}
	 */
    createChannel(name: string): IAsyncChannel;

	/**
	 * Get channel by name.
	 *
	 * @param {string} name channel's name
	 * @param {boolean} create if true, create channel
	 * @return {Channel}
	 */
    getChannel(name: string, create: boolean): IAsyncChannel;

	/**
	 * Destroy channel by name.
	 *
	 * @param {string} name channel name
	 */
	destroyChannel(name: string): void;

	/**
	 * Broadcast message to all the connected clients.
	 *
	 * @param  {string}   stype      frontend server type string
	 * @param  {string}   route      route string
	 * @param  {Object}   msg        message
	 * @param  {Object}   opts       user-defined broadcast options, optional
	 *                               opts.binded: push to binded sessions or all the sessions
	 *                               opts.filterParam: parameters for broadcast filter.
	 * @param  {Function} cb         callback
	 */
	broadcast(stype: string, route: string, msg: any, opts?: Object): Promise<void>;
}

/**
 * Channel
 * Channel maintains the receiver collection for a subject. You can add users into a channel and then broadcast message to them by channel.
 */
export declare interface IAsyncChannel
{
	/**
	 * Add user to channel.
	 *
	 * @param {string} uid user id
	 * @param {string} sid frontend server id which user has connected to
	 * @return {boolean} true if success or false if fail
	 */
	add(actorId : number): Promise<boolean>;

	/**
	 * Remove user from channel.
	 *
	 * @param {string} uid user id
	 * @param {string} sid frontend server id which user has connected to.
	 * @return [boolean] true if success or false if fail
	 */
    leave(actorId: number): boolean;

	/**
	 * Get channel members.
	 *
	 * <b>Notice:</b> Heavy operation.
	 *
	 * @return {Array} channel member uid list
	 */
    getMembers(actorIds : number[]): Promise<{ sid: string, uid: string }[]>;

	/**
	 * Get Member info.
	 *
	 * @param  {string} uid user id
	 * @return {Object} member info
	 */
    getMember(actorId: number): Promise<{ sid: string, uid: string}>;

	/**
	 * Destroy channel.
	 */
	destroy(): void;

	/**
	 * Push message to all the members in the channel
	 *
	 * @param {string} route message route
	 * @param {Object} msg message that would be sent to client
	 * @param {Object} opts user-defined push options, optional
	 * @param {Function} cb callback function
	 */
    broadcast(msg: Object, opts?: Object): Promise<void>;
    broadcast(route: string, msg: Object, opts?: Object): Promise<void>;

    pushMessage(actorId: number, route: string, msg: Object, opts?: Object): Promise<void>;
    pushMessages(actorIds: number[], route: string, msg: Object, opts?: Object): Promise<void>;

	// 频道名字
	readonly name: string;
}
