/**
 * @file 接口文件
 * @author lvxin
 */


 const Interface = {
  BASE: {
      QUERY_AREA: '/base/queryArea.do',
      SHORT_LINK: '/base/shortlink.do',
  },
  ACCOUNT: {
      GET_TEACHER_ID: '/teacher/getCurrentTeacherNumber'
  },
  TASKCENTER: {
      GET_LIVE_PLAY: '/internal/video/play',
      NEWGETAUDITDETAIL: '/kongBasicExpLogic/audit/v1/getAuditDetail',
      DEALAUDIT: '/audit/dealAudit',
  },
  SUBCLAZZ: {
      LISTCLAZZLESSON: '/subclazz/listClazzLesson.do',
      MANAGE_INDEX: '/subclazz/searchByType.do',
      CREDIT_EDIT: '/subclazz/credit/edit.do',
      // INFO: '/subclazz/info.do',
      INFO: '/assistantLogic/subclazzApi/v2/subclazzInfo',
      CHANGELIST: '/subclazz/student/changeList.do',
      TRANSFEROUTLIST: '/assistantLogic/subclazzApi/v2/subclazzTransferOutRecordList',
      REFUNDRECORDLIST: '/assistantLogic/subclazzApi/v2/subclazzRefundRecordList',
      STUDENTLIST: '/subclazz/studentList.do',
      STAT_CLAZZLESSON: '/subclazz/roster/clazzLessonDetail.do',
      ROSTERSTUDENT: '/assistantLogic/rosterApi/v2/student',
      SUMMARYLESSON: '/subclazz/summaryLesson.do',
      SUMMARY: '/subclazz/summary.do',
      RECORD: '/subclazz/student/record.do',
      LEAVE: '/subclazz/leave.do',
      SMSTEMPLATE: '/subclazz/listSmsTemplate.do',
      SMSSEND: '/subclazz/send.do',
      PRINT: '/subclazz/express/print.do',
      // 辅导班添加家长会或临时教室.
      CREATEMEETING: '/assistantLogic/assistantApi/v2/CellSubClazzAdditionalLessonCreate',
      CALL: '/subclazz/call.do',
      BATCHLEAVE: '/subclazz/batchLeave.do',
      GETHIGHSCHOOLSTUDENTRECORD: '/subclazz/roster/getHighSchoolStudentRecord.do',
      GETSTUDENTRECORD: '/subclazz/roster/getStudentRecord.do',
      ADDSTUDENTFOLLOWRECORD: '/subclazz/roster/addStudentFollowRecord.do',
      EDITSTUDENTRECORD: '/subclazz/roster/editStudentRecord.do',
      // 辅导班花统计花名册学员跟踪记录获取
      GETSTUDENTFOLLOWRECORD: '/subclazz/roster/getStudentFollowRecord.do',
      SELECT_BY_CLAZZNUMBER: '/subclazz/selectByClazzNumber.do',
      // 关闭辅导班新
      CLOSE_SUBCLAZZ: '/teachAffairLogic/clazz/v1/cellSubclazzClose',
      // 合并辅导班新
      COMBINED_SUBCLAZZ: '/teachAffairLogic/clazz/v1/cellSubclazzCombine',
      // 新创建辅导班
      SUBCLAZZ_CREATE: '/teachAffairLogic/clazz/v1/subclazzCreate',
      // 新编辑辅导班
      SUBCLAZZ_EDIT: '/teachAffairLogic/clazz/v1/subclazzEdit',
      // 辅导班导出
      SUBCLAZZ_STAT_CLAZZLESSONEXPORTEXCEL: '/subclazz/stat/clazzLessonExportExcel.do',
      // 课节统计导出
      EXPORT_CLASSLESSON_DETAIL: '/subclazz/roster/exportClazzLessonDetail.do',
      // 课节详情导出
      SUBCLAZZ_STUDENTLISTEXPORTEXCEL: '/subclazz/studentListExportExcel.do',
      // 辅导班统计花名册学员课节获取辅导班信息
      LESSON: '/subclazz/roster/lesson.do',
      // 辅导班统计花名册学员课节获取学生信息总体情况和当前课节
      STUDENTLESSON: '/subclazz/roster/studentLessonDetail.do',
      // 辅导班统计花名册学员课节获取学生信息
      STUDENTLESSONPAGER: '/subclazz/roster/studentLessonPager.do',
      // 辅导班花统计花名册高中学员档案信息编辑
      EDITHIGHSCHOOLSTUDENTRECORD: '/subclazz/roster/editHighSchoolStudentRecord.do',
      HIGHSCHOOLSTUDENT: '/assistantLogic/rosterApi/v2/highSchoolStudent',
      // 转辅导班 (旧)
      // BATCHCHANGESUBCLAZZ: '/subclazz/batchChangeSubclazz.do',
      // 转辅导班
      BATCHCHANGESUBCLAZZ: '/teachAffairLogic/subclazz/v1/batchChangeSubclazz',
      // 转辅导班
      ADDORUPDATEFOLLOWRECORDTIME: '/subclazz/roster/addOrUpdateFollowRecordTime.do',
      // 辅导班数据统计接口
      FOLLOWAPPLY: '/subclazz/statistics/followApply.do',
      // 辅导班续班数据导出
      FOLLOWAPPLYEXPORT: '/subclazz/statistics/followApplyExport.do',
      // 导出作业情况
      EXPORTHOMEWORKSTATUS: '/subclazz/roster/exportHomeworkStatus.do',
      // 花名册小学档案信息编辑
      PRIMARYSCHOOLSTUDENT: '/assistantLogic/rosterApi/v2/primarySchoolStudent',
      // 检验课程是否设置教材
      HASTEXYTBOOK: '/subclazz/hasTextbook.do',
      // 批量配货
      DISTRIBUTE: '/subclazz/distribute.do',
      // 导出花名册学生情况excel
      // EXPORTSTUDENTEXCEL: '/subclazz/roster/exportRoster.do',
      // 导出花名册学生情况excel
      EXPORTSTUDENTEXCEL: '/assistantLogic/subclazzApi/v2/exportRoster',
      // 获取课节详细内容
      GETLESSONIDXBYSUBCLASSNUB: '/assistantLogic/subclazzApi/v2/lessonIdxBySubclazzNumber',
      // 辅导班详情页-课节详情
      SUBCLAZZLESSONDETAIL: '/subclazz/roster/subclazzLessonDetail.do',
      EXPORTCLAZZLESSONDETAIL: '/subclazz/roster/exportSubclazzLessonDetail.do',
      TEXTBOOK: '/subclazz/textbook.do',
      // 批量配货
      // 导出辅导班详情页-花名册学生详情
      EXPORT_STUDENT_LESSON_DETAIL: '/subclazz/roster/exportStudentLessonDetail',
      // 设置阶段报告下发时间
      SETREPORTSTIME: '/subclazz/stage/setReportTime',
      // 设置结课报告时间
      SET_GRADUATE_REPORTS_TIME: '/subclazz/stage/setGraduateReportTime.do',
      // 获取结课时间
      GET_GRADUATE_TIME: '/clazz/getMaxEndTime.do',
      // 批量贴标签
      PASTEDLABEL: '/student/pastedStudentLable',
      // 批量撕标签
      TEARLABEL: '/student/tearStudentLable',
      // 修改成绩
      UPDATE_SCORE: '/student/updateScore.do',
      // 获取商业数据
      GET_BUSINESS_DATA: '/subclazz/roster/listBusinessData.do',
      // 商业数据——我的续班扩科
      LIST_BUSINNESS_ACHEVEMENT: '/subclazz/roster/listBusinessAchievement.do',
      // 商业数据——已报课程
      LIST_BUSINNESS_COURSE: '/subclazz/roster/listBusinessCourse.do',
      SELECTSUBCLAZZBYCLAZZNUMBERALL: '/subclazz/selectSubclazzByClazzNumberAll.do',
      // 获取结课报告详情
      GRADUATE_REPORT_DETAIL: '/subclazz/stage/getGraduateReportDetail.do',
      // 获取结课报告模版列表
      TEMPLATES_LIST: '/subclazz/template/listTemplates.do',
      // 保存结课报告
      SAVE_GRADUATE_REPORT: '/subclazz/stage/saveGraduateMessage.do',
      // 下发结课报告
      SEND_GRADUATE_REPORT: '/subclazz/stage/distributeReport.do',
      // 添加结课报告模版
      ADD_GRADUATE_REPORT_TEMPLATES: '/subclazz/template/saveTemplate.do',
      // 删除结课报告模版
      DELETE_GRADUATE_REPORT_TEMPLATES: '/subclazz/template/deleteTemplate.do',
      // 老师添加标签库
      ADDTEACHERLABEL: '/assistant/addWechatLable',
      // 老师获取个人标签库数据
      GETTEACHERLABEL: '/assistant/getWechatLable',
      // 老师删除个人标签库数据
      DELETETEACHERLABEL: '/assistant/deleteTeacherLable',
      // 通知后台同步数据
      SYNC_DATA: '/subclazz/stage/cleanStudentDate.do',
      FREEZEEXPRESS: '/subclazz/express/freezeExpress.do',
      DISTRIBUTEANOTHER: '/subclazz/distributeAnother.do',
      // 通知后台同步数据
      LISTMODIFIED: '/assistant/listModified.do',
      EXPORTMODIFIED: '/assistant/exportModified.do',
      // 获取老师所有标签
      GET_TEACHER_LABEL_LIST: '/subclazz/roster/listAllSubclazzLabel.do',
      // 修改在家时间
      MODIFY_HOME_TIME: '/subclazz/roster/modifyRetireTime.do',
      // 老师的自定义偏好列表list
      LIST_TEACHER_DEFINE_WORD: '/teacherSelfDefine/listTeacherSelfDefine.do',
      // 编辑自定义偏好
      EDIT_FAVORITE: '/teacherSelfDefine/editTeacherSelfDefine.do',
      // 添加自定义偏好
      ADD_FAVORITE: '/teacherSelfDefine/createTeacherSelfDefine.do',
      // 删除自定义偏好
      DELETE_FAVORITE: '/teacherSelfDefine/deleteTeacherSelfDefine.do',
      // 新增/编辑学生偏好列的属性值
      EDIT_DEFINE_COLUMN_TEXT: '/teacherSelfDefine/saveStudentPropertyOfTeacherSelfDefine.do',
      // 老师选择的偏好列
      LIST_TEACHER_SELECT_WORD: '/teacherSelfDefine/getProperties.do',
      // 更新老师选择的偏好列
      UPDATE_TEACHER_SELECT_WORD: '/teacherSelfDefine/updateProperties.do',
      // 获取当前辅导老师的banner信息
      GETCURASSISTANTBANNER: '/assistant/board/getCurAssistantBanner.do',
      // 获取辅导班有辅导老师的展示列表
      GETBOARDSELECTFORPAGE: '/assistant/board/getBoardSelectForPage.do',
      // 导出看板信息
      EXPORTASSISTANTBOARD: '/assistant/board/exportAssistantBoard.do',
      // 合班校验
      COMBINVALIDCHECK: '/subclazz/combineValidCheck.do',
      // 新建编辑班级校验
      CLAZZVALIDCHECK: '/subclazz/checkAssistantForCreateOrEdit.do',
      // 辅导班自动消息任务列表
      WECHAT_TASK_LIST: '/webChatTaskController/getWebChatTask.do',
      // 修改一对一微信任务状态
      CHANGE_ONE_TASK_STATUS: '/webChatTaskController/changeOneToOneTask.do',
      // 修改群微信任务状态
      CHANGE_GROUP_TASK_STATUS: '/webChatTaskController/changeGroupTask.do',
      // 群任务详情
      GROUP_DETAIL: '/webChatTaskController/groupTaskDetail.do',
      // 一对一任务详情
      ONE_DETAIL: '/webChatTaskController/oneToOneTaskDetail.do',
      // 删除发送任务
      DELETE_WECAHT__TASK: '/webChatTaskController/deleteTask.do',
      // 添加自动发送 一对一
      CREATE_WECHAT_TASK_ONE: '/webChatTaskController/createWebChatTaskOne.do',
      // 添加自动发送 群发
      CREATE_WECHAT_TASK_GROUP: '/webChatTaskController/createWebChatTaskGroup.do',
      // 编辑自动发送 一对一
      EDIT_WECHAT_TASK_ONE: '/webChatTaskController/editWebChatTaskOne.do',
      // 编辑自动发送 群发
      EDIT_WECHAT_TASK_GROUP: '/webChatTaskController/editWebChatTaskGroup.do',
      // 获取老师辅导班微信群
      GET_WE_CHAT_GROUP: '/webChatTaskController/getWebChatGroup.do',
      // 修改偏好展示状态
      MODIFY_TEACHER_DEFINE_STATUS: '/teacherSelfDefine/operateTeacherSelfDefineShowStatus.do',
      // 导出班级信息
      EXPORTCLAZZEXCEL: '/clazz/exportSelectForPage.do',
      // 请假
      LEAVE_AND_WARNING: '/assistantLogic/rosterApi/v2/studentLeaveAndWarningHandler',
      // 已布置作业的班级的课节列表
      CLAZZLESSONS: '/service/homework/cellCourseLessons.do',
      // 获取学生某个班级的评价
      STUDENT_COURSE_COMMENT: '/studyCenterLogic/comment/v1/ClazzCommentByStudentNumberToB',
      // 产品分页课节评价列表
      STUDENT_LESSON_COMMENT: '/studyCenterLogic/comment/v1/ProductCommentLessonExtPaged',
      // 获取短信模版
      GET_MESSAGE_TEMPLATE: '/assistantLogic/assistantApi/v2/SmsTemplateList',
      // 批量发送短信
      SEND_MESSAGE: '/assistantLogic/assistantApi/v2/BatchSendSms',
      // 获取学生短信
      GET_STUDENT_MESSAGE_RECORD: '/assistantLogic/assistantApi/v2/SmsLog'
  },
  // 天权登陆相关接口
  TIAN_QUAN_LOGIN: {
      // 调用天权接口 获取辅导老师微信登录信息：包含 二维码 或 插件唤起
      GET_TUTOR_WECHAT_INFO: '/tianquan/open/tutor/info',
      // 调用天权接口获取登陆流水号
      GET_SERIAL_NUMBER: '/webChatTaskController/getSerialNo.do',
      // 调用天权接口获取登陆二维码
      GET_LOGIN_URL: '/webChatTaskController/getLoginUrl.do',
      // 调用天权接口查询二维码扫描状态
      QUERY_LOGIN_STATUS: '/webChatTaskController/queryLoginStatus.do',
      // 通过微信号查询微信信息
      QUERY_WECHAT_INFO: '/tianquan/open/friend/checkWechatInfoByAlias',
  },
  // 辅导老师微信操作相关接口
  WECHART_TEACHER: {
      // 获取辅导老师微信号
      GET_WECART_ID: '/assistant/getWechatId.do',
      // 获取辅导老师微信号 直连
      GET_WECART_ID2: '/tianquan/open/tutor/info',
      // 验证微信号是否是辅导老师的好友
      CHECK_FRIEND: '/assistant/checkFriend.do',
      // 辅导老师发送加微信好友信息
      ADDFRIEND: '/assistant/addFriend.do',
      // 发送消息
      SEND_MESSAGE: '/assistant/sendMsg.do',
      // 获取消息模板
      LIST_MSG_TEMPLATE: '/assistant/listMsgTemplate.do',
      // 保存消息模板
      SAVE_TEMPLATE: '/assistant/saveTemplate.do.do',
      // 删除消息模板
      DELETE_TEMPLATE: '/assistant/deleteMsgTemplate.do',
      // 获取消息发送记录
      LIST_HISTORY_MSG: '/assistant/listHistoryMsg.do',
      // 删除消息记录
      DELETE_HISTORY_MSG: '/assistant/deleteHistoryMsg.do',
      // 更新学生微信号
      UPDATE_STUDENT_WECAHRT_ID: '/student/updateStudentWechatRelation.do',
      // UPDATE_STUDENT_WECAHRT_ID: '/assistant/updateStudentWechatId'
  },
  // 优惠券模块
  COUPON_ACTIVITY: {
      // 优惠券列表
      SELECT_FOR_PAGE: '/coupon/selectForPage.do',
      // 批量给学生发优惠券
      GIVE_COUPON_TO_STUDENT: '/coupon/giveOutCouponStudent.do',
  },
  STUDENT: {
      // 添加学生地址
      ADDRESS_ADD: '/student/addressAdd.do',
      // 用户地址修改
      ADDRESS_MODIFY: '/student/addressModify.do',
      // 学生地址列表
      ADDRESS_LIST: '/student/address/list.do',
      // StudentDetail 获取学员详情.
      GET_STUDENT_DETAIL: '/assistantLogic/studentApi/v2/studentDetail',
      // 更新联系信息.
      UPDATE_CONTACT_INFO: '/assistantLogic/studentApi/v2/updateContactInfo',
      // 更新基本信息
      UPDATE_BASIC_INFO: '/assistantLogic/studentApi/v2/updateStudentInfo',
      // 更新学生学科信息.
      UPDATE_SUBJECT_INFO: '/assistantLogic/studentApi/v2/updateSubjectInfo',
      // 更新报班信息.
      UPDATE_ENROLL_CLASS_INFO: '/assistantLogic/studentApi/v2/updateSubclazzInfo',
      // 更新学生跟进信息.
      UPDATE_FOLLOW_INFO: '/assistantLogic/studentApi/v2/updateFollowInfo',
      // 更新备注信息
      UPDATE_MARK_INFO: '/assistantData/studentApi/v2/updateContent',
      // 基本信息修改历史
      BASIC_INFO_HISTORY: '/basicExpLogic/student/v1/changeHistory',
      // 获取学生学科历史信息.
      STUDENT_SUBJECT_HISTORY: '/assistantLogic/studentApi/v2/studentSubjectHistory',
      // 完成跟进
      COMPELETE_FOLLOW: '/assistantLogic/studentApi/v2/completeFollow',
      // 学员预警任务批量跟进
      STUDENT_WARNING_TASK_FOLLOW: '/assistantLogic/taskApi/v2/studentWarningTasksHandler',
      // 获取学员辅导班信息.
      STUDENT_SUBCLAZZ_LIST: '/assistantLogic/studentApi/v2/studentSubclazzes',
      // 获取学员和辅导老师共同所在的班级.
      STUDENT_TEACHER_LIST: '/teachAffairLogic/clazz/v1/subclazzsByStudentAndAssistantNumber',
      // 检查辅导老师是否app在线
      CHECK_TEACHER_APP_ONLINE: '/task/checkAssistantAppOnlineStatus.do',
      // 发起app外呼拨打
      TEACHER_CALL_APP: '/task/assistantCallForApp.do',
      // 销售花名册外呼接口，之后会和TEACHER_CALL_APP 接口整合
      TEACHER_CALL_APP_SALE: '/kongBasicExpLogic/base/v1/callForOther',
      // 查询学生手机号
      QUERY_STUDENT_MOBILE: '/student/queryStudentMobile.do',
  },
  CLAZZ: {
      // 创建评价
      EVALUATE_CREATECOMMENT: '/studyCenterLogic/comment/v1/createComment',
      // 更新评价
      EVALUATE_UPDATECOMMENT: '/studyCenterLogic/comment/v1/updateCommentToB',
      // 显示或隐藏评价
      EVALUATE_HIDDEN: '/studyCenterLogic/comment/v1/hiddenComment',
      // 置顶评价
      EVALUATE_TOP: '/studyCenterLogic/comment/v1/topComment',
  },
  // 销售花名册(公开课)
  SALE_ROSTER: {
      // 销售花名册学生列表
      STUDENT_LIST: '/saleOnlineLogic/http/roster/searchStudent',
      // 订单信息
      ORDER_DETAIL: '/saleApi/subclazz/sameTeacherOrder',
      // 所有课节的number
      CLAZZ_LESSON_LIST: '/saleOnlineLogic/http/roster/listClazzLesson',
      // 获取所有城市信息
      LIST_AREA: '/saleOnlineLogic/http/roster/listArea',
      // 获取所有群信息
      LIST_GROUP: '/saleOnlineLogic/http/roster/listGroup',
      SETPURCHASEINTENTION: '/saleOnlineLogic/http/roster/setPurchaseIntention',
      // 导出花名册
      EXPORT_ROSTER: '/saleOnlineLogic/http/roster/exportRoster',
      ORDER_COUNT: '/saleApi/subclazz/orderCount',
      SAMETEACHERORDER: '/saleOnlineLogic/http/roster/sameTeacherOrder',
      FOLLOW: '/subclazz/roster/addStudentFollowRecordWithTeacherType.do',
      GET_CHAT_RECORD: '/saleApi/subclazz/chatRecord',
      STUDENTLESSONDETAIL: '/saleOnlineLogic/http/roster/studentLessonDetail',
      GETRECORDBYCOURSE: '/kongBasicExpLogic/follow/v1/getFollowRecord',
      HISTORICALORDERS: '/saleOnlineLogic/http/roster/historicalOrders',
      NEWFOLLOW: '/kongBasicExpLogic/follow/v1/addFollowRecord',
      STUDENT_DETAIL: '/saleOnlineLogic/http/roster/studentDetail'
  },
  HOMEPAGE: {
      ACHIEVEMENTBYMONTH: '/saleOnlineLogic/http/homePage/achievementByMonth',
      ACHIEVEMENTANDRANK: '/saleOnlineLogic/http/homePage/achievementAndRank',
      CLAZZCHANGETAB: '/saleOnlineLogic/http/homePage/clazzChangeTab',
      GETCLAZZSCHEME: '/teachAffairLogic/salesApp/v1/getClazzScheme',
      UNIONACTIVITYURL: '/unionActivity/url',
      LISTCLAZZ: '/saleOnlineLogic/http/homePage/listClazz',
      NAMEAANDTIME: '/saleOnlineLogic/http/homePage/nameAndTime',
      ANNOUNCEMENT: '/kongBasicExpLogic/homePage/v1/announcement',
      ARRIVEDDATATAB: '/saleOnlineLogic/http/homePage/arrivedDataTab'
  },
  ASSISTANTHOMEPAGE: {
      // 首页任务概览
      TASKOVERVIEW: '/assistantLogic/assistantApi/v2/taskOverview',
      // 首页辅导班概览
      SUBCLAZZTASKOVERVIEW: '/assistantLogic/assistantApi/v2/subclazzOverview',
      // 辅导首页抽屉
      SUBCLAZZDRAWER: '/assistantLogic/assistantApi/v2/subclazzDrawer'
  },
  // 业绩3.0
  ACHIEVEMENT: {
      // 我的业绩
      LISTMYACHIEVEMENT: '/saleOnlineLogic/http/achievement/listMyAchievement',
      // 我的业绩统计
      STATISTICSACHIEVEMENTPRICE: '/saleOnlineLogic/http/achievement/statisticsAchievementPrice',
      // 我的业绩导出
      EXPORTMYACHIEVEMENT: '/saleOnlineLogic/http/achievement/exportMyAchievement',
      // 业绩查询
      SEARCH: '/saleOnlineLogic/http/achievement/achievementQuery',
      // 发起申诉
      LAUNCHAPPEALACHIEVEMENT: '/saleOnlineLogic/http/achievement/launchAppealAchievement',
      // 发起申诉详情页
      DETAILAPPEALORDER: '/saleOnlineLogic/http/achievement/detailAppealOrder',
      // 申诉记录查询
      LISTAPPEALRECORD: '/saleOnlineLogic/http/achievement/listAppealRecord',
      // 业绩统计
      LISTTOTALACHIEVEMENT: '/saleOnlineLogic/http/achievement/listTotalAchievement',
      // 业绩明细查询
      LISTACHIEVEMENTFORMANAGER: '/saleOnlineLogic/http/achievement/listAchievementForManager',
      // 业绩统计导出
      EXPORTTOTALACHIEVEMENT: '/saleOnlineLogic/http/achievement/exportTotalAchievement',
      // 获取当前主管的下属
      GETSUBORDINATELIST: '/saleOnlineLogic/http/achievement/getSubordinateList',
      // 业绩统计
      ACHIEVEMENTSTATISTICS: '/saleOnlineLogic/http/achievement/achievementStatistics',
      // 业绩统计表总计
      GETTOTALACHIEVEMENTSTATISTICS: '/saleOnlineLogic/http/achievement/totalAchievementStatistics',
      ACHIEVEMENTDETAIL: '/saleOnlineLogic/http/achievement/achievementDetail',
      EXPORTACHIEVEMENTDETAIL: '/saleOnlineLogic/http/achievement/exportAchievementDetail',
      EXPORTACHIEVEMENTSTATISTICS: '/saleOnlineLogic/http/achievement/exportAchievementStatistics',
      SUPERUPDATEAUDIT: '/kongBasicExpLogic/audit/v1/superUpdateAudit'
  },
  SALETASK: {
      LISTUNFOLLOWEDORDERS: '/saleOnlineLogic/http/saleTask/listUnFollowedOrders',
      LISTUNFOLLOWEDSTUDENTS: '/saleOnlineLogic/http/saleTask/listUnFollowedStudents',
      FOLLOWDETAIL: '/saleOnlineLogic/http/saleTask/listFollowRecord',
      SELECTFOLLOWSTATUSOFUNFOLLOWEDORDER: '/saleOnlineLogic/http/saleTask/selectFollowStatusOfUnFollowedOrder',
      SETFOLLOWTASK: '/saleOnlineLogic/http/saleTask/setFollowTask',
      SALETASKBOARD: '/saleOnlineLogic/http/saleTask/saleTaskBoard',
      FOLLOWDETAILINFO: '/saleOnlineLogic/http/saleTask/followDetail'
  },
  // 虚拟组织架构
  DEPARTMENT: {
      // 获取组织结构
      GET_DEPARTMENT_TREE: '/basicExpLogic/orgAPI/v1/getDepartmentTree',
      // 移动后，更新组织结构，新增组织， 编辑组织名称
      SAVE_DEPARTMENT: '/basicExpLogic/orgAPI/v1/saveDepartment',
      // 删除组织
      DEL_DEPARTMENT: '/basicExpLogic/orgAPI/v1/delDepartments',
      // 组织成员
      DEPARTMENT_EMPLOYEE: '/basicExpLogic/orgAPI/v1/searchEmployee',
      // 删除组织成员
      DEL_EMPLOYEE: '/basicExpLogic/orgAPI/v1/delEmployees',
      // 添加、编辑组织成员
      SAVE_EMPLOYEE: '/basicExpLogic/orgAPI/v1/saveEmployees',
      // 获取大区、大学联动数据
      GET_COLLEGES: '/kapi/v1/distributionLogic/recruit/getColleges',
      // 主管绑定负责的大学
      ASSOCIATE_COLLEGE: '/basicExpLogic/orgAPI/v1/associateCollege'
  },

    //以下是lvxin的测试
  LOGIN: {
      BPLOGIN: 'bp/login'
  }
};

export default Interface;
