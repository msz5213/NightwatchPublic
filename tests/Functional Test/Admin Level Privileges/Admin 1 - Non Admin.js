module.exports ={
		'Non-C9 Privileges - Firm Admin1': function(client){
			var navigation = client.page.navBar();
			var loginPage = client.page.loginPage();
			var usersPage = client.page.usersPage();
			client.maximizeWindow();
			client.url(client.launch_url);
			loginPage.adminLogin(client);
			usersPage.go();
			
			usersPage.selectFirmAll(client, client.globals.adminFirm);
			usersPage.userNameSearchAll(client.globals.nonAdminUser,client);
			usersPage.selectFirstRow();
			usersPage.editAdminLevelTab();
			
			var adminPage=client.page.editAdminPage();
			adminPage.setToAdmin1(client)
			adminPage.saveConfirm(client);
			adminPage.adminLevelToastMess();
			navigation.logout();
			
			loginPage.userLogin(client)
			navigation.selectSettingGear();
			navigation.getText('@privilege',function(result){
				navigation.verify.equal(result.value, "Privilege : firmAdmin1");
			});
			
			var navigation = client.page.navBar();
			navigation
			.verify.visible('@firms')
			.verify.visible('@groups')
			.verify.visible('@users')
			.verify.visible('@connections')
			.verify.visible('@recordings');
			navigation.verify.visible('@help');
			navigation.expect.element('@viewLogs').to.not.be.visible;
			navigation.click('@firms');
			client.pause(1000);
			
			var firmsPage= client.page.firmsPage();
			firmsPage
			.verify.visible('@editFirmBtn')
			.verify.visible('@manageGrpBtn')
			.verify.visible('@manageConnBtn')
			.verify.visible('@manageUsersBtn')
			.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			firmsPage.expect.element('@addFirmBtn').to.not.be.visible
			
			navigation.click('@groups')
			navigation.api.pause(1000);
			
			var groupsPage=client.page.groupsPage();
			groupsPage
			.verify.visible('@addGroupBtn')
			.verify.visible('@editGrpBtn')
			.verify.visible('@editGrpUsersBtn')
			.verify.visible('@viewGrpConnBtn')
			.verify.visible('@delGrpBtn')
			.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			.verify.elementNotPresent('@selectFirmBarsearch2','Firm selection bar is not visible for Admin1 user');
			
			client.elements('xpath','//*[@id="scrollable-area"]/table/tbody/tr',function(result){
				client.verify.notEqual(result.value.length, 20, 'There should be at less than 25 groups on this page');
			});
			navigation.click('@users')
			navigation.api.pause(1000);
			
			var usersPage=client.page.usersPage();
			usersPage
			.verify.visible('@editUserBtn')
			.verify.visible('@addUserBtn')
			.verify.visible('@editBtn')
			.verify.visible('@editGrpsBtn')
			.verify.visible('@resetPassBtn')
			.verify.visible('@deleteUserBtn')
			.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			.verify.visible('@editNeighBtn')
			
			usersPage.expect.element('@editAdminBtn').to.not.be.visible
			usersPage.expect.element('@editSalesUserBtn').to.not.be.visible
			
			navigation.click('@connections');
			navigation.api.pause(1000);
			
			var connPage=client.page.connectionsPage();
			connPage
			.verify.visible('@addConnBtn')
			.verify.visible('@editConnBtn')
			.verify.visible('@delConnBtn')
			.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			
			navigation.click('@recordings');
			navigation.api.pause(1000);
			
			var recPage=client.page.recordingsPage();
			recPage
			.verify.visible('@backBtn')
			.verify.visible('@playBtn')
			.verify.visible('@forwardBtn')
			.verify.visible('@speedBtn')
			.verify.visible('@slider')
			.verify.visible('@viewQosBtn')
			.verify.visible('@detailsBtn')
			.verify.visible('@exportBtn')
			.verify.visible('@downloadBtn')
			.verify.visible('@callTypeTab')
			.verify.visible('@show');
			
			client.end();
			
		}
				
}