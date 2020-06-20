// const dns = require('dns');
// // dns.lookup() 使用操作系统功能来执行名称解析。 它可能不需要执行任何网络通信
// dns.lookup('example.org', (err, address, family) => {
//     console.log('地址: %j 地址族: IPv%s', address, family);
// });
// // dns 模块中的所有其他函数都连接到实际的 DNS 服务器以执行名称解析。 它们将会始终使用网络执行 DNS 查询。
// dns.resolve4('archive.org', (err, addresses) => {
//   if (err) throw err;

//   console.log(`地址: ${JSON.stringify(addresses)}`);

//   addresses.forEach((a) => {
//     dns.reverse(a, (err, hostnames) => {
//       if (err) {
//         throw err;
//       }
//       console.log(`地址 ${a} 逆向到: ${JSON.stringify(hostnames)}`);
//     });
//   });
// });
const { Resolver } = require('dns');
const resolver = new Resolver();

resolver.setServers(['4.4.4.4']);
// 此请求将使用 4.4.4.4 中的服务器，与全局设置无关。
resolver.resolve4('example.org', (err, addresses) => {
    console.log('haha')
    console.log(`地址: ${JSON.stringify(addresses)}`);
});