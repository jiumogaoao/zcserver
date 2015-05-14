function get(socket,data,fn){
	console.log("promotion/get");
	data.data=10086/*不用传*/
	var result={
		code : 1,
		time : 10086,
		data : {
			"index":{
						"visualPic":{
							id:"001",
							name:"首页大图",
							dsc:"不说",
							data:[
									{"id":"001","name":"","image":["http://"],"dsc":"","job":"",group:"001"},
									{"id":"001","name":"","image":["http://"],"dsc":"","job":"",group:"001"},
									{"id":"001","name":"","image":["http://"],"dsc":"","job":"",group:"001"},
									{"id":"001","name":"","image":["http://"],"dsc":"","job":"",group:"001",data:[
										{"name":"19岁以下","value":1},
										{"name":"20-29岁以下","value":25},
										{"name":"30-39岁以下","value":62},
										{"name":"40-49岁以下","value":7},
										{"name":"50岁以上","value":4},
										]},
									{"id":"001","name":"","image":["http://"],"dsc":"","job":"",group:"001",data:[
										{"name":"北京","value":32.26},
										{"name":"上海","value":28.93},
										{"name":"广州","value":21.65},
										{"name":"杭州","value":9.21},
										{"name":"南京","value":8.26},
										{"name":"深圳","value":5.43},
										{"name":"东三省","value":5.27},
										{"name":"成都","value":5.21},
										{"name":"厦门","value":2.87},
										{"name":"乌鲁木齐","value":0.16},
									]},
									{"id":"001","name":"","image":["http://"],"dsc":"","job":"",group:"001",data:[
										{"name":"一个月","value":10},
										{"name":"三个月","value":20},
										{"name":"六个月","value":30},
										{"name":"九个月","value":40},
									]}
								]
						},
						"danger":{id:"004",
							name:"360°全方位风险控制",
							dsc_1:"风险控制,小组由专业、稳健、实战经验丰富的房地产相关产业链专家组成",
							dsc:"从投前筛选、投后管理到获利退出，全方位为众筹人保驾护航。",
							data:[
									{"id":"006","name":"袭刚","image":["images/1111.jpg"],"dsc":"曾任通用电气资本公司全球地产及鼎晖地产基金创始合伙人","job":"风控",group:"004","zhiJi":"组长"},
									{"id":"007","name":"周雪爽","image":["images/b.jpg"],"dsc":"华诚律师事务所合伙人，丰富的地产及金融法律服务经验","job":"法律",group:"004"},
									{"id":"008","name":"谢猛虎","image":["images/c.jpg"],"dsc":"中礁资产管理公司总经理，丰富的商业及工业地产等全产业链实践经验","job":"资管",group:"004"},
									{"id":"009","name":"李明","image":["images/d.jpg"],"dsc":"沪港国际咨询集团副总经理，丰富的咨询、会计及评估领域服务经验","job":"评估",group:"004"},
									{"id":"010","name":"郑福泉","image":["images/e.jpg"],"dsc":"中瑞岳华税务师事务所合伙人，曾任百安居中国税务总监","job":"税务",group:"004"}
								]
						},
					},
			"mode":[
					{id:"005",
					name:"众筹模式",
					dsc:"不说",
					data:[
							{"id":"011","name":"","image":["images/w01.gif","images/w01.png"],"dsc":"","job":"",group:"005"},
							{"id":"013","name":"","image":["images/w02.png","images/w02.gif"],"dsc":"","job":"",group:"005"},
							{"id":"015","name":"","image":["images/w03.gif","images/w03.png"],"dsc":"","job":"",group:"005"},
							{"id":"017","name":"","image":["images/w04.png","images/w04.gif"],"dsc":"","job":"",group:"005"},
							{"id":"019","name":"","image":["images/w05.gif","images/w05.png"],"dsc":"","job":"",group:"005"},
							{"id":"017","name":"","image":["images/w06.png","images/w06.gif"],"dsc":"","job":"",group:"005"},
							{"id":"019","name":"","image":["images/w07.gif","images/w07.png"],"dsc":"","job":"",group:"005"},
							{"id":"017","name":"","image":["images/w08.png","images/w08.gif"],"dsc":"","job":"",group:"005"},
							{"id":"019","name":"","image":["images/w09.gif","images/w09.png"],"dsc":"","job":"",group:"005"},
						]
					}
					],
			"procedure":[
						{id:"013",
						name:"大图",
						dsc:"不说",
						data:[{"id":"021","name":"","image":["http://"],"dsc":"","job":"",group:"013"}]
								},
						{id:"006",
						name:"众筹步聚",
						dsc:"不说",
						data:[
								{"id":"021","name":"","image":["images/step_01.jpg"],"dsc":"","job":"",group:"006"},
								{"id":"022","name":"","image":["images/step_02.jpg"],"dsc":"","job":"",group:"006"},
								{"id":"023","name":"","image":["images/step_03.jpg"],"dsc":"","job":"",group:"006"},
								{"id":"024","name":"","image":["images/step_04.jpg"],"dsc":"","job":"",group:"006"},
								{"id":"025","name":"","image":["images/step_05.jpg"],"dsc":"","job":"",group:"006"}
							]
						}
						],
			"FAQS":[

					{id:"007",
					name:"常见问题",
					dsc:"不说",
					data:[
							{"id":"027","name":"在中筹网金平台，需要多少钱才可以参与投资？","image":[""],"dsc":"中筹网金平台众筹者最低认购额度仅为100元人民币。中筹网金就是让普通大众能以较少金额，参与投资千万级别的房产项目，享受高端投资者才能享有的投资机会和收益。","job":"",group:"007"},
							{"id":"028","name":"整个众筹过程中，中筹网金承担什么角色？","image":[""],"dsc":"“中筹网金”为提供众筹信息的第三方平台，不参与众筹和资产运作。平台在项目交易过程中，仅作为项目众筹的交易平台，提供一个信息收集、呈现、及发布的角色，众筹者与房产开发商（或持有人）本着自愿的原则完成相关交易。","job":"",group:"007"},
							{"id":"029","name":"急用钱资金周转不过来，中途是否可以自由转让众筹份额？","image":[""],"dsc":"参与众筹者可在规定期限后，到平台即将上线的【转让中心】频道，进行项目众筹份额协议转让。最大限度地提高您的资金流动性，不必担心资金周转不过来。","job":"",group:"007"},
							{"id":"030","name":"房地产众筹，为什么会有如此高的收益空间？","image":[""],"dsc":"中筹网金平台的所有项目均是开发商直接申请进行众筹合作项目，获最低折扣的同时，通过网络平台简化链条，砍掉中介的佣金和银行贷款利率，所以会让项目众筹价格更低廉；成功众筹的项目，在持有期间会有机会参与项目的租金分红，升值后投票售出、转让，都会产生无限的收益空间。市场分析得出，房地产众筹项目的预期年化收益率达15%以上。 ","job":"",group:"007"},
							{"id":"031","name":"退出机制中，众筹的项目如何投票出售？","image":[""],"dsc":"众筹者成功众筹的项目，最长持有期限不超过12个月，是目前市面上最短“去化期限”的房地产众筹平台。 成功众筹的项目托管方-第三方资产管理公司可寻找到买家，参与众筹者可投票决定是否售出，一人一票制，参与众筹者投票超过51%即为通过，方可售出获得投资收益。","job":"",group:"007"},
							{"id":"032","name":"在交易环节，中筹网金如何保障众筹者的利益的？","image":[""],"dsc":"①平台众筹项目中所涉及的各个交易环节均严格依照法律政策规定，并经过平台风险控制小组严格把控；②众筹者所有资金全权托管于第三方托管账户（汇付天下），全程定向流入流出，并在个人中心更新资金明细；③众筹者和房产开发商双方会根据协议，项目全权由第三方资产管理公司管理，保障众筹的合法权益和利益。","job":"",group:"007"}
						]
					}
					],
			"team":[
					{id:"008",
					name:"创始团队",
					dsc:"不说",
					data:[
							{"id":"033","name":"","image":["images/chuangshi.png"],"dsc":"","job":"",group:"008"}
						]
					},
					{id:"009",
					name:"风险控制小组",
					dsc:"不说",
					data:[
							{"id":"032","name":"龚刚","image":["images/1111.jpg"],"dsc":"现任北京和天津的投资公司和基金公司的创始人及管理人。 二十二年国内及海外十多个国家房地产及金融投资和管理经验，美国通用电气资本公司全球地产特殊机会投资部的创始人， 国内最大私募股权基金鼎晖投资的地产基金创始合伙人。在国内，成功投资、开发和管理了多个从最南（三亚）到最北（哈尔滨）的地标及创新型项目， 任四十多家地产投资及开发公司、基金及管理公司的法人代表、董事长、执行董事等；在美洲、欧洲、亚洲等地投资并管理过上百亿美元的资产组合。","job":"风控组长",group:"009"},
							{"id":"033","name":"周雪爽","image":["images/444.jpg"],"dsc":"现任上海华诚律师事务所合伙人。毕业于上海交通大学。周律师在金融、房地产、互联网等法律领域有着丰富的经验，他带领的律师团队从2004年开始服务建行、中行、光大、广发等多家商业银行，提供了超过4万笔的风险防控及不良资产处置法律服务。 周律师同时拥有深厚的互联网行业和企业法律服务背景，担任包括大型企业集团，新兴中小企业等多家企业常年法律顾问。","job":"法律法规",group:"009"},
							{"id":"034","name":"谢猛虎","image":["images/5555.jpg"],"dsc":"现任上海中礁资产管理公司总经理。曾就职于上海某商业地产集团公司，长期从事商业类地产，工业地产等的投资咨询，代理，交易，运营，顾问等服务工作。专注于为银行，信托，基金，政府等部门进行房地产方面的全产业链服务。包括存量资 产，不良资产的盘活，处置，评估，融资等。负责资产交易风险控制，特殊投资机会的策略建议，资产管理和增值运营。","job":"资产管理",group:"009"},
							{"id":"035","name":"李明","image":["images/c.jpg"],"dsc":"现任沪港国际咨询集团有限公司副总经理、上海璨石资产管理有限公司董事长。沪港国际咨询集团有限公司由上海沪港建设咨询、上海沪港金茂会计师事务所、上海沪港资产评估、上海沪港房地产估价、上海沪港项目投资咨询、上海建设审计进修学院等单位组建而成的集团型中介组织。有工程造价咨询甲级资质、招标代理甲级资质、工程咨询甲级资质、上海市政府采购招标甲级资质、司法审计等资质。","job":"评估咨询",group:"009"},
							{"id":"036","name":"郑福泉","image":["images/d.jpg"],"dsc":"现任中瑞岳华税务师事务所合伙人。郑福泉先生毕业于上海外国语大学，现任上海财经大学兼职导师。郑福泉先生在国际知名事务所从事中国税务咨询超过10年，并曾任百安居中国税务总监。在税务合规性、税务审核、尽职调查、交易架构、投资、资金汇回、企业并购、公司上市、企业业务模式和税务审计风险防范等方面有着倍受认可的的工作业绩。","job":"税务管理",group:"009"}
						]
					},
					{id:"010",
					name:"马博士课堂",
					dsc:"不说",
					data:[
							{"id":"037","name":"马红漫","image":["images/mahongman_pic.png"],"dsc":"经济学博士，著名财经主持人、制片人、资深财经评论员、上海十大青年经济人物。 现为第一财经《财经关键词》、《头脑风暴》主持人，《财经夜行线》新闻主播，东方卫视《东方夜新闻》新闻评论员。长期担任《第一财经日报》、《环球时报》、《人民日报》、《解放日报》等国内知名平面媒体专栏作者与评论员工作。拥有丰富的高端财经论坛主持评论经验，担任博鳌亚洲论坛、上海浦东新年论坛、虹桥论坛、全国私人银行论坛等各类高端财经论坛活动评论工作。","job":"",group:"010"}
						]
					},
					{id:"011",
					name:"荣誉顾问",
					dsc:"不说",
					data:[
							{"id":"038","name":"杨介生","image":["images/yangjiesheng_pic.png"],"dsc":'上海浙江商会执行副会长、上海温州商会名誉会长、上海锦丽斯投资集团有限公司董事长。 中共党员，上海市长宁区第十三届人大代表；上海市长宁区第十二届政协委员；上海温州商会第二届、第三届会长；温州市第八届、第九届政协委员；世界温州人联谊总会常务副会长。1998年获"上海十大杰出青年"提名，1998年获“温州改革开放风云人物”荣誉称号，1999年获上海市十大优秀青年企业家"金鹰奖"，2008年获评温州“改革开放30年在外风云温商30人”之一。',"job":"",group:"011"}
						]
					}
					],
			"idea":[
					{id:"012",
					name:"经营理念",
					dsc:"不说",
					data:[		
							{"id":"039","name":"","image":["http://"],"dsc":"【平台理念】 人人参与 创新投资【平台愿景】 致力于创新房地产的投资方式，结合互联网突破传统投资理念，为市场提供新的稳健、安全、收益高的投资理财渠道中筹网金是全国首家专业房地产众筹平台，利用最新的互联网革新，旨在改变中国6.6亿人投资房地产经济的方式。通过整合线上线下资源，精心筛选众筹资产源头、缩短交易中间环节、专业化投后管理，创新变革传统的金融和房地产行业；平台打造由专业、稳健、实战经验丰富的房地产相关产业链专家组成，从投前筛选到投后管理，全方位为众筹人保驾护航，通过市场的错位、信息的错位等来获利。通过降低投资门槛，使投资更普惠化。透过互联网让大众参与，建立价值过滤体系，营造良好的诚信机制，低门槛，高回报，重安全，以大众的力量，“普惠金融 和谐共富”，链接了普通大众和开发商的价值链条，通过互联网和互联网金融影响和改变房地产行业的模式，让广大网民和普通的投资者能享受到专业的投资服务和高收益的投资机会。中筹网金2014.10.10","job":"",group:"012",data:["【平台理念】 人人参与 创新投资","【平台愿景】 致力于创新房地产的投资方式，结合互联网突破传统投资理念，为市场提供新的稳健、安全、收益高的投资理财渠道","上海中筹互联网金融信息服务有限公司","2014.10.10"]
						   }
						]
					}	
					]
			}
		};
	var returnFn=function(){
		if(socket){
	 	socket.emit("promotion_get",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
	}
	data_mg.updateTime.find({"parentKey":"promotion"},function(err,doc){
		if(err){
			result.code=0
			returnFn()
		}else{
			if(doc&&doc.length&&doc[0].childKey>data.data){
				result.time=doc.childKey;
				data_mg.page_promoGroup.find({},function(errA,docA){
					if(errA){
						result.code=0
						returnFn()
					}else{
						data_mg.promoGroup_promotion.find({},function(errB,docB){
							if(errB){
								result.code=0
								returnFn()
							}else{
								var proGroup={};
								for(var group in docB){
									if(!proGroup[docB[group].parentKey]){
										proGroup[docB[group].parentKey]=[];
									}
									proGroup[docB[group].parentKey].push(docB[group].childKey)
								}
								data_mg.promotion.find({},function(errC,docC){
									if(errC){
										result.code=0
										returnFn()
									}else{
										result.code=1;
										result.data={};
										var proArray={};
										for (var pro in docC){
											proArray[docC[pro].id]=docC[pro]
										}
										for(var page in docA){
											if(!result.data[docA[page].parentKey]){
												result.data[docA[page].parentKey]=[]
											}
											for(var i=0;i<proGroup[docA[page].childKey].length;i++){
												proArray[docA[page].childKey].data.push(proArray[proGroup[docA[page].childKey][i]])
											}
											result.data[docA[page].parentKey].push(proArray[docA[page].childKey]);
											
										}
										returnFn()
									}
								})
							}
						})
					}
				})
			}else{
				result.code=2
				returnFn()
			}
		}
	})
		
};

function edit(socket,data,fn){
	console.log("promotion/edit");
	data.data={
		page:"index",/*所在页面*/
		data:[{id:"001",/*组id*/
						title:"首页大图",/*组名*/
						dsc:"不说",/*组描述*/
						data:[
								{"id":"001","name":"","image":"http://","dsc":"","job":"",group:"001"}/*单个的*/
							]
						}] 
	}
	var result={code:1};
	var returnFn=function(){
		if(socket){
	 	socket.emit("promotion_edit",result);
	 }
	 	else if(fn){
	 		var returnString = JSON.stringify(result);
	 		fn(returnString);
	 	}
	}
	for (var pro=0 ;pro< data.data.data.length;pro++){
		data_mg.promotion.update({"id":data.data.data[pro].id},{$set:data.data.data[pro]},{},function(err){
			if(err){result.code=0}else if(pro==data.data.data.length-1){
				data_mg.updateTime.update({"parentKey":"promotion"},{$set:{"childKey":new Date().getTime()}},{},function(errA){
					if(errA){
						result.code=0
					}else{
						result.code=1
					}
					returnFn()
				})
			}

		})
	}
	
		
};


exports.get=get;
exports.edit=edit;
