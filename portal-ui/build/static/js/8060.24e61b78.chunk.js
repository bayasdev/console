"use strict";(self.webpackChunkportal_ui=self.webpackChunkportal_ui||[]).push([[8060],{18060:(e,t,o)=>{o.r(t),o.d(t,{default:()=>_});var n=o(72791),a=o(57689),r=o(29945),i=o(61757),l=o(23814),s=o(56087),c=o(80184);const p=()=>(0,c.jsx)(r.KfX,{iconComponent:(0,c.jsx)(r.HNx,{}),title:"What are Event Destinations?",help:(0,c.jsx)(r.xuv,{sx:{paddingTop:"20px"},children:"MinIO bucket notifications allow administrators to send notifications to supported external services on certain object or bucket events. MinIO supports bucket and object-level S3 events similar to the Amazon S3 Event Notifications."})});var d=o(79844),u=o(26181),g=o.n(u);const m=o(16444).ZP.button((e=>{let{theme:t}=e;return{background:g()(t,"boxBackground","#FFF"),border:"".concat(g()(t,"borderColor","#E2E2E2")," 1px solid"),borderRadius:5,width:250,height:80,display:"flex",alignItems:"center",justifyContent:"start",marginBottom:16,marginRight:8,cursor:"pointer",overflow:"hidden","&:hover":{backgroundColor:g()(t,"buttons.regular.hover.background","#ebebeb")},"& .imageContainer":{width:80,"& .logoButton":{maxWidth:46,maxHeight:46,filter:"drop-shadow(1px 1px 8px #fff)"}},"& .lambdaNotifTitle":{color:g()(t,"buttons.callAction.enabled.background","#07193E"),fontSize:16,fontFamily:"Inter,sans-serif",paddingLeft:18,fontWeight:"bold"}}})),h=e=>{let{destinationType:t,srcImage:o,title:n}=e;const r=(0,a.s0)();return(0,c.jsxs)(m,{onClick:()=>{r("".concat(s.gA.EVENT_DESTINATIONS_ADD,"/").concat(t))},children:[(0,c.jsx)("span",{className:"imageContainer",children:(0,c.jsx)("img",{src:o,className:"logoButton",alt:n})}),(0,c.jsx)("span",{className:"lambdaNotifTitle",children:n})]})};var f=o(99670),y=o(44690),b=o(87995);const T=i.BI.filter((e=>""!==e.logo)),S=T.filter((e=>e.category===i.z5.DB)),v=T.filter((e=>e.category===i.z5.Queue)),k=T.filter((e=>e.category===i.z5.Func)),_=()=>{const e=(0,a.s0)(),t=(0,y.TL)();return(0,n.useEffect)((()=>{t((0,b.Sc)("notification_type_selector"))}),[]),(0,c.jsxs)(n.Fragment,{children:[(0,c.jsx)(d.Z,{label:(0,c.jsx)(n.Fragment,{children:(0,c.jsx)(r.hbI,{label:"Event Destinations",onClick:()=>e(s.gA.EVENT_DESTINATIONS)})}),actions:(0,c.jsx)(f.Z,{})}),(0,c.jsx)(r.Xgh,{children:(0,c.jsx)(r.ltY,{helpBox:(0,c.jsx)(p,{}),children:(0,c.jsxs)(r.xuv,{children:[(0,c.jsx)(r.xuv,{sx:{fontSize:16,fontWeight:600,paddingBottom:15},children:"Queue"}),(0,c.jsx)(r.xuv,{sx:{...l.fc.iconContainer},children:v.map((e=>(0,c.jsx)(h,{destinationType:e.actionTrigger,srcImage:e.logo,title:e.targetTitle},"icon-".concat(e.targetTitle))))}),(0,c.jsx)(r.xuv,{sx:{fontSize:16,fontWeight:600,paddingBottom:15},children:"Database"}),(0,c.jsx)(r.xuv,{sx:{...l.fc.iconContainer},children:S.map((e=>(0,c.jsx)(h,{destinationType:e.actionTrigger,srcImage:e.logo,title:e.targetTitle},"icon-".concat(e.targetTitle))))}),(0,c.jsx)(r.xuv,{sx:{fontSize:16,fontWeight:600,paddingBottom:15},children:"Functions"}),(0,c.jsx)(r.xuv,{sx:{...l.fc.iconContainer},children:k.map((e=>(0,c.jsx)(h,{destinationType:e.actionTrigger,srcImage:e.logo,title:e.targetTitle},"icon-".concat(e.targetTitle))))})]})})})]})}},61757:(e,t,o)=>{o.d(t,{BI:()=>f,DD:()=>b,L:()=>v,dM:()=>a,ee:()=>n,fk:()=>g,oj:()=>T,z5:()=>m});const n="notify_postgres",a="notify_mysql",r="notify_kafka",i="notify_amqp",l="notify_mqtt",s="notify_redis",c="notify_nats",p="notify_elasticsearch",d="notify_webhook",u="notify_nsq",g=e=>e.map((e=>({service_name:"".concat(e.service,":").concat(e.account_id),name:e.service,account_id:e.account_id,status:e.status})));class m{}m.DB="database",m.Queue="queue",m.Func="functions";const h=()=>"".concat(document.baseURI),f=[{actionTrigger:n,targetTitle:"PostgreSQL",logo:"".concat(h(),"postgres-logo.svg"),category:m.DB},{actionTrigger:r,targetTitle:"Kafka",logo:"".concat(h(),"kafka-logo.svg"),category:m.Queue},{actionTrigger:i,targetTitle:"AMQP",logo:"".concat(h(),"amqp-logo.svg"),category:m.Queue},{actionTrigger:l,targetTitle:"MQTT",logo:"".concat(h(),"mqtt-logo.svg"),category:m.Queue},{actionTrigger:s,targetTitle:"Redis",logo:"".concat(h(),"redis-logo.svg"),category:m.Queue},{actionTrigger:c,targetTitle:"NATS",logo:"".concat(h(),"nats-logo.svg"),category:m.Queue},{actionTrigger:a,targetTitle:"Mysql",logo:"".concat(h(),"mysql-logo.svg"),category:m.DB},{actionTrigger:p,targetTitle:"Elastic Search",logo:"".concat(h(),"elasticsearch-logo.svg"),category:m.DB},{actionTrigger:d,targetTitle:"Webhook",logo:"".concat(h(),"webhooks-logo.svg"),category:m.Func},{actionTrigger:u,targetTitle:"NSQ",logo:"".concat(h(),"nsq-logo.svg"),category:m.Queue}],y=[{name:"queue_dir",label:"Queue Directory",required:!1,tooltip:"Staging directory for undelivered messages e.g. '/home/events'",type:"string",placeholder:"Enter Queue Directory"},{name:"queue_limit",label:"Queue Limit",required:!1,tooltip:"Maximum limit for undelivered messages, defaults to '10000'",type:"number",placeholder:"Enter Queue Limit"},{name:"comment",label:"Comment",required:!1,type:"comment",placeholder:"Enter custom notes if any"}],b=e=>e.filter((e=>""!==e.value)),T={[r]:[{name:"brokers",label:"Brokers",required:!0,tooltip:"Comma separated list of Kafka broker addresses",type:"string",placeholder:"Enter Brokers"},{name:"topic",label:"Topic",tooltip:"Kafka topic used for bucket notifications",type:"string",placeholder:"Enter Topic"},{name:"sasl_username",label:"SASL Username",tooltip:"Username for SASL/PLAIN or SASL/SCRAM authentication",type:"string",placeholder:"Enter SASL Username"},{name:"sasl_password",label:"SASL Password",tooltip:"Password for SASL/PLAIN or SASL/SCRAM authentication",type:"string",placeholder:"Enter SASL Password"},{name:"sasl_mechanism",label:"SASL Mechanism",tooltip:"SASL authentication mechanism, default 'PLAIN'",type:"string"},{name:"tls_client_auth",label:"TLS Client Auth",tooltip:"Client Auth determines the Kafka server's policy for TLS client authorization",type:"string",placeholder:"Enter TLS Client Auth"},{name:"sasl",label:"SASL",tooltip:"Set to 'on' to enable SASL authentication",type:"on|off"},{name:"tls",label:"TLS",tooltip:"Set to 'on' to enable TLS",type:"on|off"},{name:"tls_skip_verify",label:"TLS skip verify",tooltip:'Trust server TLS without verification, defaults to "on" (verify)',type:"on|off"},{name:"client_tls_cert",label:"client TLS cert",tooltip:"Path to client certificate for mTLS authorization",type:"path",placeholder:"Enter TLS Client Cert"},{name:"client_tls_key",label:"client TLS key",tooltip:"Path to client key for mTLS authorization",type:"path",placeholder:"Enter TLS Client Key"},{name:"version",label:"Version",tooltip:"Specify the version of the Kafka cluster e.g '2.2.0'",type:"string",placeholder:"Enter Kafka Version"},...y],[i]:[{name:"url",required:!0,label:"URL",tooltip:"AMQP server endpoint e.g. `amqp://myuser:mypassword@localhost:5672`",type:"url"},{name:"exchange",label:"Exchange",tooltip:"Name of the AMQP exchange",type:"string",placeholder:"Enter Exchange"},{name:"exchange_type",label:"Exchange Type",tooltip:"AMQP exchange type",type:"string",placeholder:"Enter Exchange Type"},{name:"routing_key",label:"Routing Key",tooltip:"Routing key for publishing",type:"string",placeholder:"Enter Routing Key"},{name:"mandatory",label:"Mandatory",tooltip:"Quietly ignore undelivered messages when set to 'off', default is 'on'",type:"on|off"},{name:"durable",label:"Durable",tooltip:"Persist queue across broker restarts when set to 'on', default is 'off'",type:"on|off"},{name:"no_wait",label:"No Wait",tooltip:"Non-blocking message delivery when set to 'on', default is 'off'",type:"on|off"},{name:"internal",label:"Internal",tooltip:"Set to 'on' for exchange to be not used directly by publishers, but only when bound to other exchanges",type:"on|off"},{name:"auto_deleted",label:"Auto Deleted",tooltip:"Auto delete queue when set to 'on', when there are no consumers",type:"on|off"},{name:"delivery_mode",label:"Delivery Mode",tooltip:"Set to '1' for non-persistent or '2' for persistent queue",type:"number",placeholder:"Enter Delivery Mode"},...y],[s]:[{name:"address",required:!0,label:"Address",tooltip:"Redis server's address e.g. `localhost:6379`",type:"address",placeholder:"Enter Address"},{name:"key",required:!0,label:"Key",tooltip:"Redis key to store/update events, key is auto-created",type:"string",placeholder:"Enter Key"},{name:"password",label:"Password",tooltip:"Redis server password",type:"string",placeholder:"Enter Password"},...y],[l]:[{name:"broker",required:!0,label:"Broker",tooltip:"MQTT server endpoint e.g. `tcp://localhost:1883`",type:"uri",placeholder:"Enter Brokers"},{name:"topic",required:!0,label:"Topic",tooltip:"Name of the MQTT topic to publish",type:"string",placeholder:"Enter Topic"},{name:"username",label:"Username",tooltip:"MQTT username",type:"string",placeholder:"Enter Username"},{name:"password",label:"Password",tooltip:"MQTT password",type:"string",placeholder:"Enter Password"},{name:"qos",label:"QOS",tooltip:"Set the quality of service priority, defaults to '0'",type:"number",placeholder:"Enter QOS"},{name:"keep_alive_interval",label:"Keep Alive Interval",tooltip:"Keep-alive interval for MQTT connections in s,m,h,d",type:"duration",placeholder:"Enter Keep Alive Interval"},{name:"reconnect_interval",label:"Reconnect Interval",tooltip:"Reconnect interval for MQTT connections in s,m,h,d",type:"duration",placeholder:"Enter Reconnect Interval"},...y],[c]:[{name:"address",required:!0,label:"Address",tooltip:"NATS server address e.g. '0.0.0.0:4222'",type:"address",placeholder:"Enter Address"},{name:"subject",required:!0,label:"Subject",tooltip:"NATS subscription subject",type:"string",placeholder:"Enter NATS Subject"},{name:"username",label:"Username",tooltip:"NATS username",type:"string",placeholder:"Enter NATS Username"},{name:"password",label:"Password",tooltip:"NATS password",type:"string",placeholder:"Enter NATS password"},{name:"token",label:"Token",tooltip:"NATS token",type:"string",placeholder:"Enter NATS token"},{name:"tls",label:"TLS",tooltip:"Set to 'on' to enable TLS",type:"on|off"},{name:"tls_skip_verify",label:"TLS Skip Verify",tooltip:'Trust server TLS without verification, defaults to "on" (verify)',type:"on|off"},{name:"ping_interval",label:"Ping Interval",tooltip:"Client ping commands interval in s,m,h,d. Disabled by default",type:"duration",placeholder:"Enter Ping Interval"},{name:"streaming",label:"Streaming",tooltip:"Set to 'on' to use streaming NATS server",type:"on|off"},{name:"streaming_async",label:"Streaming async",tooltip:"Set to 'on' to enable asynchronous publish",type:"on|off"},{name:"streaming_max_pub_acks_in_flight",label:"Streaming max publish ACKS in flight",tooltip:"Number of messages to publish without waiting for ACKs",type:"number",placeholder:"Enter Streaming in flight value"},{name:"streaming_cluster_id",label:"Streaming Cluster ID",tooltip:"Unique ID for NATS streaming cluster",type:"string",placeholder:"Enter Streaming Cluster ID"},{name:"cert_authority",label:"Cert Authority",tooltip:"Path to certificate chain of the target NATS server",type:"string",placeholder:"Enter Cert Authority"},{name:"client_cert",label:"Client Cert",tooltip:"Client cert for NATS mTLS auth",type:"string",placeholder:"Enter Client Cert"},{name:"client_key",label:"Client Key",tooltip:"Client cert key for NATS mTLS authorization",type:"string",placeholder:"Enter Client Key"},...y],[p]:[{name:"url",required:!0,label:"URL",tooltip:"Elasticsearch server's address, with optional authentication info",type:"url",placeholder:"Enter URL"},{name:"index",required:!0,label:"Index",tooltip:"Elasticsearch index to store/update events, index is auto-created",type:"string",placeholder:"Enter Index"},{name:"format",required:!0,label:"Format",tooltip:"'namespace' reflects current bucket/object list and 'access' reflects a journal of object operations, defaults to 'namespace'",type:"enum",placeholder:"Enter Format"},...y],[d]:[{name:"endpoint",required:!0,label:"Endpoint",tooltip:"Webhook server endpoint e.g. http://localhost:8080/minio/events",type:"url",placeholder:"Enter Endpoint"},{name:"auth_token",label:"Auth Token",tooltip:"Opaque string or JWT authorization token",type:"string",placeholder:"Enter auth_token"},...y],[u]:[{name:"nsqd_address",required:!0,label:"NSQD Address",tooltip:"NSQ server address e.g. '127.0.0.1:4150'",type:"address",placeholder:"Enter nsqd_address"},{name:"topic",required:!0,label:"Topic",tooltip:"NSQ topic",type:"string",placeholder:"Enter Topic"},{name:"tls",label:"TLS",tooltip:"Set to 'on' to enable TLS",type:"on|off"},{name:"tls_skip_verify",label:"TLS Skip Verify",tooltip:'Trust server TLS without verification, defaults to "on" (verify)',type:"on|off"},...y]},S={webhook:"notify_webhook",amqp:"notify_amqp",kafka:"notify_kafka",mqtt:"notify_mqtt",nats:"notify_nats",nsq:"notify_nsq",mysql:"notify_mysql",postgresql:"notify_postgres",elasticsearch:"notify_elasticsearch",redis:"notify_redis"},v=e=>S[e]}}]);
//# sourceMappingURL=8060.24e61b78.chunk.js.map