var f5SpecialWords = [
  'accumulate',
  'active_members',
  'active_nodes',
  'after',
  'b64decode',
  'b64encode',
  'call',
  'class',
  'cache',
  'client_addr',
  'client_port',
  'clientside',
  'clone',
  'close',
  'connect',
  'cpu',
  'crc32',
  'decode_uri',
  'discard',
  'domain',
  'drop',
  'event',
  'findclass',
  'forward',
  'getfield',
  'htonl',
  'htons',
  'http_cookie',
  'http_header',
  'http_host',
  'http_method',
  'http_uri',
  'http_version',
  'ifile',
  'imid',
  'ip_protocol',
  'ip_tos',
  'ip_ttl',
  'link_qos',
  'listen',
  'llookup',
  'local_addr',
  'log',
  'matchclass',
  'matches_glob',
  'md5',
  'members',
  'nexthop',
  'node',
  'nodes',
  'ntohl',
  'ntohs',
  'peer',
  'persist',
  'pool',
  'priority',
  'rateclass',
  'recv',
  'redirect',
  'reject',
  'relate_client',
  'relate_server',
  'remote_addr',
  'rmd160',
  'send',
  'server_addr',
  'server_port',
  'serverside',
  'session',
  'sha1',
  'sha256',
  'sha384',
  'sha512',
  'sharedvar',
  'snat',
  'snatpool',
  'static',
  'substr',
  'table',
  'tcl_platform',
  'timing',
  'traffic_group',
  'translate',
  'use',
  'virtual',
  'vlan_id',
  'whereis',
  'when'
];

var f5keywords = [];
var accesskeywords = [
  'ACCESS::acl',
  'ACCESS::disable',
  'ACCESS::enable',
  'ACCESS::policy',
  'ACCESS::respond',
  'ACCESS::restrict_irule_events',
  'ACCESS::session',
  'ACCESS::user',
  'ACCESS::uuid'
];
var adaptkeywords = [
  'ADAPT::allow',
  'ADAPT::enable',
  'ADAPT::preview_size',
  'ADAPT::result',
  'ADAPT::select',
  'ADAPT::service_down_action',
  'ADAPT::timeout'
];
var aeskeywords = [
  'AES::decrypt',
  'AES::encrypt',
  'AES::key'
];
var antifraudwords = [
  'ANTIFRAUD::enable',
  'ANTIFRAUD::disable'
];
var asmkeywords = [
  'ASM::client_ip',
  'ASM::disable',
  'ASM::enable',
  'ASM::payload',
  'ASM::raise',
  'ASM::severity',
  'ASM::status',
  'ASM::support_id',
  'ASM::unblock',
  'ASM::violation',
  'ASM::violation_data'
];
var asnkeywords = [
  'ASN1::decode',
  'ASN1::element',
  'ASN1::encode'
];
var authkeywords = [
  'AUTH::abort',
  'AUTH::authenticate',
  'AUTH::authenticate_continue',
  'AUTH::cert_credential',
  'AUTH::cert_issuer_credential',
  'AUTH::last_event_session_id',
  'AUTH::password_credential',
  'AUTH::ssl_cc_ldap_status',
  'AUTH::ssl_cc_ldap_username',
  'AUTH::start',
  'AUTH::status',
  'AUTH::subscribe',
  'AUTH::unsubscibe',
  'AUTH::username_credential',
  'AUTH::wantcredential_prompt',
  'AUTH::wantcredential_prompt_style',
  'AUTH::wantcredential_type',
  'NTLM::disable',
  'NTLM::enable'
];
var avrkeywords = [
  'AVR::disable',
  'AVR::enable'
];
var bwckeywords = [
  'BWC::color',
  'BWC::mark',
  'BWC::policy',
  'BWC::rate'
];
var cachekeywords = [
  'CACHE::accept_encoding',
  'CACHE::age',
  'CACHE::disable',
  'CACHE::enable',
  'CACHE::expire',
  'CACHE::header',
  'CACHE::headers',
  'CACHE::hits',
  'CACHE::payload',
  'CACHE::priority',
  'CACHE::trace',
  'CACHE::uri',
  'CACHE::useragent',
  'CACHE::userkey'
];
var categorykeywords = [
  'CATEGORY::analytics',
  'CATEGORY::filetype',
  'CATEGORY::lookup',
  'CATEGORY::matchtype',
  'CATEGORY::safesearch'
];
var classificateionkeywords = [
  'CLASSIFICATION::app',
  'CLASSIFICATION::category',
  'CLASSIFICATION::disabled',
  'CLASSIFICATION::enabled',
  'CLASSIFICATION::protocol',
  'CLASSIFICATION::urlcat',
  'CLASSIFY::application',
  'CLASSIFY::category',
  'CLASSIFY::defer'
];
var compresskeywords = [
  'COMPRESS::buffer_size',
  'COMPRESS::disable',
  'COMPRESS::enable',
  'COMPRESS::gzip',
  'COMPRESS::method'
];
var cryptokeywords = [
  'CRYPTO::decrypt',
  'CRYPTO::encrypt',
  'CRYPTO::hash',
  'CRYPTO::keygen',
  'CRYPTO::sign',
  'CRYPTO::verify'
];
var datagramkeywords = [
  'DATAGRAM::ip',
  'DATAGRAM::ip6',
  'DATAGRAM::tcp'
];
var demanglekeywords = [
  'DEMANGLE::disable',
  'DEMANGLE::enable'
];
var diameterkeywords = [
  'DIAMETER::avp',
  'DIAMETER::command',
  'DIAMETER::disconnect',
  'DIAMETER::drop',
  'DIAMETER::header',
  'DIAMETER::host',
  'DIAMETER::is_request',
  'DIAMETER::is_response',
  'DIAMETER::length',
  'DIAMETER::payload',
  'DIAMETER::realm',
  'DIAMETER::respond',
  'DIAMETER::result',
  'DIAMETER::session'
];
var dnskeywords = [
  'DNS::class',
  'DNS::disable',
  'DNS::edns0',
  'DNS::enable',
  'DNS::header',
  'DNS::last_act',
  'DNS::len',
  'DNS::name',
  'DNS::ptype',
  'DNS::query',
  'DNS::question',
  'DNS::rdata',
  'DNS::rr',
  'DNS::tsig'
];
var doskeywords = [
  'DOSL7::disable',
  'DOSL7::enable',
  'DOSL7::profile'
];
var fixkeywords = [
  'FIX::tag'
];
var flowkeywords = [
  'FLOW::priority',
  'FLOWTABLE::count',
  'FLOWTABLE::limit'
];
var hslkeywords = [
  'HSL::open',
  'HSL::send'
];
var htmlkeywords = [
  'HTML::comment',
  'HTML::disable',
  'HTML::enable',
  'HTML::tag'
];
var httpkeywords = [
  'HTTP::class',
  'HTTP::clear',
  'HTTP::close',
  'HTTP::collect',
  'HTTP::cookie',
  'HTTP::disable',
  'HTTP::enable',
  'HTTP::fallback',
  'HTTP::header',
  'HTTP::host',
  'HTTP::is_keepalive',
  'HTTP::is_redirect',
  'HTTP::method',
  'HTTP::passthrough_reason',
  'HTTP::password',
  'HTTP::path',
  'HTTP::payload',
  'HTTP::query',
  'HTTP::redirect',
  'HTTP::release',
  'HTTP::request',
  'HTTP::request_num',
  'HTTP::respond',
  'HTTP::retry',
  'HTTP::status',
  'HTTP::uri',
  'HTTP::username',
  'HTTP::version'
];
var icapkeywords = [
  'ICAP::header',
  'ICAP::method',
  'ICAP::status',
  'ICAP::uri'
];
var ipkeywords = [
  'IP::addr',
  'IP::client_addr',
  'IP::hops',
  'IP::idle_timeout',
  'IP::local_addr',
  'IP::protocol',
  'IP::remote_addr',
  'IP::server_addr',
  'IP::stats',
  'IP::tos',
  'IP::ttl',
  'IP::version'
];
var isessionkeywords = [
  'ISESSION::deduplication'
];
var istatskeywords = [
  'ISTATS::remove',
  'ISTATS::get',
  'ISTATS::incr',
  'ISTATS::set'
];
var lbkeywords = [
  'LB::bias',
  'LB::class',
  'LB::command',
  'LB::connect',
  'LB::context_id',
  'LB::detach',
  'LB::down',
  'LB::dst_tag',
  'LB::mode',
  'LB::persist',
  'LB::prime',
  'LB::queue',
  'LB::reselect',
  'LB::select',
  'LB::server',
  'LB::snat',
  'LB::src_tag',
  'LB::status',
  'LB::up'
];
var linekeywords = [
  'LINE',
  'LINE::get',
  'LINE::set'
];
var linkkeywords = [
  'LINK::lasthop',
  'LINK::nexthop',
  'LINK::qos',
  'LINK::vlan_id'
];
var namekeywords = [
  'NAME::lookup',
  'NAME::response'
];
var oneconnectkeywords = [
  'ONECONNECT::detach',
  'ONECONNECT::label',
  'ONECONNECT::reuse',
  'ONECONNECT::select'
];
var pluginkeywords = [
  'PLUGIN::enable',
  'PLUGIN::disable'
];
var profilekeywords = [
  'PROFILE::auth',
  'PROFILE::clientssl',
  'PROFILE::exists',
  'PROFILE::fasthttp',
  'PROFILE::fastL4',
  'PROFILE::ftp',
  'PROFILE::http',
  'PROFILE::httpclass',
  'PROFILE::oneconnect',
  'PROFILE::persist',
  'PROFILE::serverssl',
  'PROFILE::stream',
  'PROFILE::tcp',
  'PROFILE::udp',
  'PROFILE::xml'
];
var radiuskeywords = [
  'RADIUS::avp',
  'RADIUS::code',
  'RADIUS::id'
];
var resolvkeywords = [
  'RESOLV::lookup',
];
var rewritekeywords = [
  'REWRITE::disable',
  'REWRITE::enable',
  'REWRITE::payload',
  'REWRITE::post_process'
];
var routekeywords = [
  'ROUTE::age',
  'ROUTE::bandwidth',
  'ROUTE::domain',
  'ROUTE::rtt',
  'ROUTE::rttvar'
];
var rtspkeywords = [
  'RTSP::collect',
  'RTSP::header',
  'RTSP::method',
  'RTSP::msg_source',
  'RTSP::payload',
  'RTSP::release',
  'RTSP::respond',
  'RTSP::status',
  'RTSP::uri',
  'RTSP::version'
];
var sctpkeywords = [
  'SCTP::client_port',
  'SCTP::collect',
  'SCTP::local_port',
  'SCTP::mss',
  'SCTP::payload',
  'SCTP::ppi',
  'SCTP::release',
  'SCTP::remote_port',
  'SCTP::respond',
  'SCTP::server_port'
];
var sdpkeywords = [
  'SDP::field',
  'SDP::media',
  'SDP::session_id'
];
var sessionkeywords = [
  'SESSION::data'
];
var sipkeywords = [
  'SIP::call_id',
  'SIP::discard',
  'SIP::from',
  'SIP::header',
  'SIP::method',
  'SIP::payload',
  'SIP::respond',
  'SIP::response',
  'SIP::to',
  'SIP::uri',
  'SIP::via'
];
var smtpskeywords = [
  'SMTPS::disable',
  'SMTPS::enable'
];
var sockskeywords = [
  'SOCKS::allowed',
  'SOCKS::destination',
  'SOCKS::version'
];
var sslkeywords = [
  'SSL::authenticate',
  'SSL::cert',
  'SSL::cipher',
  'SSL::collect',
  'SSL::disable',
  'SSL::enable',
  'SSL::extensions',
  'SSL::forward_proxy',
  'SSL::handshake',
  'SSL::is_renegotiation_secure',
  'SSL::mode',
  'SSL::modssl_sessionid_headers',
  'SSL::payload',
  'SSL::profile',
  'SSL::renegotiate',
  'SSL::respond',
  'SSL::secure_renegotiation',
  'SSL::session',
  'SSL::sessionid',
  'SSL::sessionticket',
  'SSL::unclean_shutdown',
  'SSL::verify_result'
];
var statskeywords = [
  'STATS::get',
  'STATS::incr',
  'STATS::set',
  'STATS::setmax',
  'STATS::setmin'
];
var streamkeywords = [
  'STREAM::disable',
  'STREAM::enable',
  'STREAM::encoding',
  'STREAM::expression',
  'STREAM::match',
  'STREAM::max_matchsize',
  'STREAM::replace'
];
var tcpkeywords = [
  'TCP::bandwidth',
  'TCP::client_port',
  'TCP::close',
  'TCP::collect',
  'TCP::local_port',
  'TCP::mss',
  'TCP::nagle',
  'TCP::notify',
  'TCP::offset',
  'TCP::option',
  'TCP::payload',
  'TCP::release',
  'TCP::remote_port',
  'TCP::respond',
  'TCP::rtt',
  'TCP::server_port',
  'TCP::unused_port'
];
var tmmkeywords = [
  'TMM::cmp_cluster_primary',
  'TMM::cmp_count',
  'TMM::cmp_group',
  'TMM::cmp_unit'
];
var udpkeywords = [
  'UDP::client_port',
  'UDP::drop',
  'UDP::local_port',
  'UDP::mss',
  'UDP::payload',
  'UDP::remote_port',
  'UDP::respond',
  'UDP::server_port',
  'UDP::unused_port'
];
var urikeywords = [
  'URI::basename',
  'URI::compare',
  'URI::decode',
  'URI::encode',
  'URI::host',
  'URI::path',
  'URI::port',
  'URI::protocol',
  'URI::query'
];
var wamkeywords = [
  'WAM::disable',
  'WAM::enable'
];
var webssokeywords = [
  'WEBSSO::disable',
  'WEBSSO::enable',
  'WEBSSO::select'
];
var x509keywords = [
  'X509::cert_fields',
  'X509::extensions',
  'X509::hash',
  'X509::issuer',
  'X509::not_valid_after',
  'X509::not_valid_before',
  'X509::serial_number',
  'X509::signature_algorithm',
  'X509::subject',
  'X509::subject_public_key',
  'X509::subject_public_key_RSA_bits',
  'X509::subject_public_key_type',
  'X509::verify_cert_error_string',
  'X509::version',
  'X509::whole'
];
var xmlkeywords = [
  'XML::address',
  'XML::collect',
  'XML::element',
  'XML::event',
  'XML::eventid',
  'XML::parse',
  'XML::release',
  'XML::soap',
  'XML::subscribe'
];

f5keywords = f5keywords.concat(accesskeywords, adaptkeywords, aeskeywords, antifraudwords, asmkeywords, asnkeywords,
  authkeywords, avrkeywords, bwckeywords, cachekeywords, categorykeywords, classificateionkeywords,
  compresskeywords, cryptokeywords, datagramkeywords, demanglekeywords, diameterkeywords,
  dnskeywords, doskeywords, fixkeywords, flowkeywords, hslkeywords, htmlkeywords, httpkeywords,
  icapkeywords, ipkeywords, isessionkeywords, istatskeywords, lbkeywords, linekeywords,
  linkkeywords, namekeywords, oneconnectkeywords, pluginkeywords, profilekeywords,
  radiuskeywords, resolvkeywords, rewritekeywords, routekeywords, rtspkeywords, sctpkeywords,
  sdpkeywords, sessionkeywords, sipkeywords, smtpskeywords, sockskeywords, sslkeywords,
  statskeywords, streamkeywords, tcpkeywords, tmmkeywords, udpkeywords, urikeywords,
  wamkeywords, webssokeywords, x509keywords, xmlkeywords)

var keywords = [
  'append',
  'array',
  'beep',
  'binary',
  'break',
  'case',
  'catch',
  'clock',
  'concat',
  'continue',
  'dde',
  'default',
  'echo',
  'encoding',
  'error',
  'eval',
  'expr',
  'format',
  'global',
  'history',
  'incr',
  'info',
  'join',
  'lappend',
  'lindex',
  'linsert',
  'list',
  'llength',
  'load',
  'loadTk',
  'lrange',
  'lreplace',
  'lsearch',
  'lset',
  'lsort',
  'msgcat',
  'Platform-specific',
  'puts',
  're_syntax',
  'read',
  'regexp',
  'registry',
  'regsub',
  'resource',
  'return',
  'scan',
  'set',
  'split',
  'string',
  'subst',
  'tclLog',
  'tclMacPkgSearch',
  'tclPkgSetup',
  'tclPkgUnknown',
  'trace',
  'unset',
  'variable'
];

var functions = [
  'if',
  'elseif',
  'else',
  'eq',
  'ne',
  'in',
  'ni',
  'findstr',
  'for',
  'foreach',
  'while',
  'switch',
  'contains',
  'ends_with',
  'equals',
  'matches',
  'matches_regex',
  'starts_with',
  'and',
  'not',
  'or'
];

var eventList = [
  'ACCESS_SESSION_STARTED',
  'ACCESS_SESSION_CLOSED',
  'ACCESS_ACL_ALLOWED',
  'ACCESS_ACL_DENIED',
  'ACCESS_POLICY_AGENT_EVENT',
  'ACCESS_POLICY_COMPLETED',
  'ADAPT_REQUEST_RESULT',
  'ADAPT_RESPONSE_RESULT',
  'ASM_REQUEST_BLOCKING',
  'ASM_REQUEST_DONE',
  'ASM_REQUEST_VIOLATION',
  'ASM_RESPONSE_VIOLATION',
  'AUTH_ERROR',
  'AUTH_FAILURE',
  'AUTH_RESULT',
  'AUTH_SUCCESS',
  'AUTH_WANTCREDENTIAL',
  'CACHE_REQUEST',
  'CACHE_RESPONSE',
  'CACHE_UPDATE',
  'CATEGORY_MATCHED',
  'CLASSIFICATION_DETECTED',
  'CLIENT_ACCEPTED',
  'CLIENT_CLOSED',
  'CLIENT_DATA',
  'CLIENT_LINE',
  'CLIENTSSL_CLIENTCERT',
  'CLIENTSSL_CLIENTHELLO',
  'CLIENTSSL_DATA',
  'CLIENTSSL_HANDSHAKE',
  'CLIENTSSL_SERVERHELLO_SEND',
  'DIAMETER_INGRESS',
  'DIAMETER_EGRESS',
  'DNS_REQUEST',
  'DNS_RESPONSE',
  'FIX_MESSAGE',
  'FLOW_INIT',
  'HTML_COMMENT_MATCHED',
  'HTML_TAG_MATCHED',
  'HTTP_CLASS_FAILED',
  'HTTP_CLASS_SELECTED',
  'HTTP_DISABLED',
  'HTTP_PROXY_REQUEST',
  'HTTP_REQUEST_DATA',
  'HTTP_REQUEST_SEND',
  'HTTP_RESPONSE_CONTINUE',
  'HTTP_RESPONSE_DATA',
  'HTTP_REQUEST_RELEASE',
  'HTTP_RESPONSE_RELEASE',
  'HTTP_RESPONSE',
  'HTTP_REQUEST',
  'ICAP_REQUEST',
  'ICAP_RESPONSE',
  'IN_DOSL7_ATTACK',
  'LB_FAILED',
  'LB_QUEUED',
  'LB_SELECTED',
  'NAME_RESOLVED',
  'PCP_REQUEST',
  'PCP_RESPONSE',
  'QOE_PARSE_DONE',
  'REWRITE_REQUEST_DONE',
  'REWRITE_RESPONSE_DONE',
  'RTSP_REQUEST_DATA',
  'RTSP_REQUEST',
  'RTSP_RESPONSE_DATA',
  'RTSP_RESPONSE',
  'RULE_INIT',
  'SERVER_CLOSED',
  'SERVER_CONNECTED',
  'SERVER_DATA',
  'SERVER_LINE',
  'SERVERSSL_CLIENTHELLO_SEND',
  'SERVERSSL_DATA',
  'SERVERSSL_HANDSHAKE',
  'SERVERSSL_SERVERHELLO',
  'SIP_REQUEST_SEND',
  'SIP_REQUEST',
  'SIP_RESPONSE_SEND',
  'SIP_RESPONSE',
  'SOCKS_REQUEST',
  'STREAM_MATCHED',
  'USER_REQUEST',
  'USER_RESPONSE',
  'XML_BEGIN_DOCUMENT',
  'XML_BEGIN_ELEMENT',
  'XML_CDATA',
  'XML_CONTENT_BASED_ROUTING',
  'XML_END_DOCUMENT',
  'XML_END_ELEMENT',
  'XML_EVENT'
];

var allKeywordsRe = f5keywords.join("\[ \\[\\]\]|\[ \\[\\] \]") + f5keywords.join("$|");
var allSpecialWords = f5SpecialWords.join("\[ \\[\\]\]|\[ \\[\\] \]") + f5SpecialWords.join("$|");
var allFunctionsWords = functions.join("\[ \\[\\]\]|\[ \\[\\] \]");
var tclKeywords = keywords.join("\[ \\[\\]\]|\[ \\[\\] \]");
var functionWords = functions.join("\[ \\[\\]\]|\[ \\[\\] \]");
