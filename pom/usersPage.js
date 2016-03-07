var userPageCommands = {
		go: function(){
			this.api.pause(1000);
			this.click('@usersLink');
			this.api.pause(1000);
		},
		addUserToFirm : function(firm,client){
			this.click('@addUserBtn');
			this.api.pause(1000);
			this.click('@selectFirmBar')
			.setValue('@selectFirmBarSearch',firm);
			this.api.pause(1000);
			this.api.keys(client.Keys.ENTER);
			this.waitForElementVisible('@addUserSubmitBtn',2000);
			
			var now = new Date();
			var dateString=(now.getHours()<10 ? '0'+now.getHours().toString() : now.getHours().toString())+''+
			(now.getMinutes()<10 ? '0'+now.getMinutes().toString() : now.getMinutes().toString())+''+
			(now.getSeconds()<10 ? '0'+now.getSeconds().toString() : now.getSeconds().toString())+''+
			(now.getMilliseconds()<10?'00'+now.getMilliseconds().toString():(now.getMilliseconds()<100?'0'+now.getMilliseconds().toString():now.getMilliseconds().toString()));
			
			this.waitForElementVisible('@fnameField',1000)
			.waitForElementVisible('@lnameField',1000)
			.setValue('@fnameField', 'John')
			.setValue('@lnameField','Doe'+dateString)
			.setValue('@emailField',client.globals.email1)
			.click('@genPassBtn');
			this.api.pause(1000);
			this.setValue('@workField',123456789)
			.setValue('@mobileField',234567890)
			.click('@voiceYes');
			this.api.pause(1000);
			/*
			var username = this.getValue('@username');
			var description =this.getValue('@descField').toString();
			var password = description.substring((description.indexOf(' Password=')+10),8);
			//console.log('username: '+username,' and password: '+password);
			*/
			this.click('@addUserSubmitBtn');
			this.waitForElementVisible('@newUserModal',2000)
			.click('@addUserConfirmBtn');
			this.api.pause(1000);
			
			return dateString;
			
		},
		editFirstRecord: function(){
			this.waitForElementVisible('@firstRow',2000);
			this.click('@firstRow')
			.click('@editUserBtn');
			this.api.pause(1000);
			
		}
};

module.exports = {
		commands :[userPageCommands],
		elements: {
			usersLink: {
				selector: '//*[@id="navbar"]/ul[1]/li[3]/a/h4/i',
				locateStrategy: 'xpath'
			},
			editUserBtn: {
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[2]/i',
				locateStrategy: 'xpath'
			},
			addUserBtn:{
				selector: '//*[@id="ng-view"]/div[2]/div[1]/ul[1]/li[1]/i',
				locateStrategy:'xpath'
			},
			selectFirmBar: {
				selector: '//*[@id="ng-view"]/div/div/div/div/a/span',
				locateStrategy: 'xpath'
			},
			selectFirmBarSearch: {
				selector: '//*[@id="ng-view"]/div/div/div/div/div/div/input',
				locateStrategy: 'xpath'
			},
			addUserSubmitBtn: {
				selector: '//*[@id="adduserdata"]/div[7]/button[2]',
				locateStrategy: 'xpath'
			},
			fnameField: {
				selector: '//*[@id="firstname"]',
				locateStrategy: 'xpath'
			},
			lnameField: {
				selector: '//*[@id="lastname"]',
				locateStrategy: 'xpath'
			},
			addUserConfirmBtn:{
				selector: '//*[@id="adduserConfirmedButton"]',
				locateStrategy: 'xpath'
			},
			firstRow: {
				selector: '//*[@id="scrollable-area"]/table/tbody/tr/td[1]',
				locateStrategy: 'xpath'
			},
			firmName: '#firmName',
			emailField: '#email',
			username: '#username',
			genPassBtn: '#genpassword',
			workField: '#work',
			mobileField: '#mobile',
			passField1: '#password',
			passField2: '#verpassword',
			descField: '#description',
			voiceYes: {
				selector: '//*[@id="voiceRecordingYes"]',
				locateStrategy: 'xpath'
			},
			newUserModal:{
				selector: '//*[@id="userConfirmModal"]/div[2]/div',
				locateStrategy: 'xpath'
			}
			
		}
}