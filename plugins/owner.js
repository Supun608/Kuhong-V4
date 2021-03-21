let handler = function (m) {
  // this.sendContact(m.chat, '94754273991', 'supun', m)
  conn.sendContact(m.chat, '94754273991', 'Owner supun', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
