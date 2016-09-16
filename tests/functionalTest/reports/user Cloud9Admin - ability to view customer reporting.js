module.exports ={
		
		'User Cloud9Admin - ability to view customer reporting': function(client){
			
			var loginPage = client.page.loginPage();
		
			client.url(client.launch_url);
			client.windowHandle(function(hand){
				var handle = hand.value;
				client.windowSize(handle,1700,800);
			});

			loginPage.adminLogin(client);
			
			var reportPage = client.page.reportPage();
			reportPage.c9reports(client);
			reportPage.selectFirm(client, 'C9 Technologies');
			reportPage.cloud9Usage(client);
			reportPage.userButtonRport(client);
			reportPage.firmButtonReport(client);
			reportPage.weekButton();
			reportPage.monthButton();
					
			client.closeWindow();
			client.end();
		}
}