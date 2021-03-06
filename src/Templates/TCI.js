const TCI = (props) => {
  return `<!DOCTYPE html>
<html lang="en" xmlns="https://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width,initial-scale=1">
	<meta name="x-apple-disable-message-reformatting">
	<title></title>
	<!--[if mso]>
<style>
  table {border-collapse:collapse;border-spacing:0;border:none;margin:0;}
  div, td {padding:0;}
  div {margin:0 !important;}
</style>
<noscript>
<xml>
<o:OfficeDocumentSettings>
<o:PixelsPerInch>96</o:PixelsPerInch>
</o:OfficeDocumentSettings>
</xml>
</noscript>
<![endif]-->
	<style>
		table,
		td,
		div,
		h1,
		p {
			font-family: Arial, sans-serif;
		}

		@media screen and (max-width: 530px) {
			.unsub {
				display: block;
				padding: 8px;
				margin-top: 14px;
				border-radius: 6px;
				background-color: #FF9933;
				text-decoration: none !important;
				font-weight: bold;
			}

			.col-lge {
				max-width: 100% !important;
			}
		}

		@media screen and (min-width: 531px) {
			.col-sml {
				max-width: 27% !important;
			}

			.col-lge {
				max-width: 73% !important;
			}
		}
	</style>
</head>

<body style="margin:0; padding:0; word-spacing:normal; background-color:#EFEFEF;">
	<!--PREHEADER TEXT START HERE-->
	<table width="100%" border="0" cellspacing="0" cellpadding="0" align="center"
		style="display:none !important; visibility:hidden; mso-hide:all; font-size:1px; color:#ffffff; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden;">
		<tbody>
			<tr>
				<td
					style="display:none !important; visibility:hidden; mso-hide:all; font-size:1px; color:#ffffff; line-height:1px; max-height:0px; max-width:0px; opacity:0; overflow:hidden;">
					Pre-Header Text Goes Here</td>
			</tr>
		</tbody>
	</table>
	<!--PREHEADER TEXT END HERE-->
	<div role="article" aria-roledescription="email" lang="en"
		style="text-size-adjust:100%; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; background-color:#EFEFEF;">
		<!--START - OUTER SCAFFOLD-->
		<table role="presentation" style="width:100%; border:none; border-spacing:0;">
			<tr>
				<td align="center" style="padding:0;">
					<!--START - GHOST TABLE FOR OUTLOOK-->
					<!--[if mso]>
		<table role="presentation" align="center" style="width:600px; background-color:#000000;" bgcolor="#000000">
		<tr style="background-color:#000000;">
		<td style="background-color:#000000;">
		<![endif]-->
					<!--START - MAIN CONTENT CONTAINER-->
					<!--START - HEADER LOGO-->
					<table role="presentation"
						style="width:94%; max-width:600px; border:none; border-spacing:0; text-align:left; font-family:Arial,sans-serif; font-size:16px; line-height:18pt; color:#6C6C6C; background-color:#000000;"
						bgcolor="#000000">
						<tr>
							<td style="padding:30px 0px 0px 0px; background-color:#FFFFFF;">
								<p style="margin-top:0em; margin-bottom:0em; text-align: center" align="center"><img
										src="http://cdn.mcauto-images-production.sendgrid.net/416b2593daeb264e/3f150518-4799-4421-ab82-8cf7cfd2fa73/1648x537.png"
										width="200" /></p>

								<div align="center" style="border-bottom:8px solid black;">&nbsp;</div>
								<!--START - HEADING WITH TEXT-->
								<table role="presentation"
									style="width:100%; border:none; border-spacing:0; text-align:left; font-family:Arial,sans-serif; font-size:16px; line-height:18pt; color:#363636; background-color: #FFFFFF;"
									bgcolor="#FFFFFF">
									<tr>
										<td style="padding:10px; background-color:#ffffff;">
											<p style="margin-bottom:1em; text-align: center;" align="center"><a
													href="#SC_1"
													style="font-weight:bold; text-decoration: underline; color: #FF9933;"
													target="_blank">Sponsored Content 1</a>&nbsp;<span
													style="color:#000000; font-weight:normal; font-size:10px; line-height:12px;">[ad]</span>
											</p>

											<p style="margin-bottom:1em;"><a href="${props.ar1.URL}"
													style="font-weight:bold; text-decoration: none; color: #000000;"
													target="_blank">${props.ar1.Head}</a><br>
												${props.ar1.Bod}&nbsp;<a href="${props.ar1.URL}"
													style="text-decoration:underline; font-weight: bold; color: #FF9933;"
													target="_blank">Read More &gt;&gt;</a></p>

											<p style="margin-bottom:1em;"><a href="${props.ad1.URL}"
													style="font-weight:bold; text-decoration: none; color: #000000;"
													target="_blank">${props.ad1.Head}</a> <span
													style="color:#000000; font-weight:normal; font-size:10px; line-height:12px;">[ad]</span><br>
												${props.ad1.Bod}.&nbsp;<a href="${props.ad1.URL}"
													style="text-decoration:underline; font-weight: bold; color: #FF9933;"
													target="_blank">${props.ad1.Call}</a></p>

													<p style="margin-bottom:1em;"><a href="${props.ar2.URL}"
													style="font-weight:bold; text-decoration: none; color: #000000;"
													target="_blank">${props.ar2.Head}</a><br>
												${props.ar2.Bod}&nbsp;<a href="${props.ar2.URL}"
													style="text-decoration:underline; font-weight: bold; color: #FF9933;"
													target="_blank">Read More &gt;&gt;</a></p>

											<p style="margin-bottom:1em;"><a href="${props.ad2.URL}"
													style="font-weight:bold; text-decoration: none; color: #000000;"
													target="_blank">${props.ad2.Head}</a> <span
													style="color:#000000; font-weight:normal; font-size:10px; line-height:12px;">[ad]</span><br>
												${props.ad2.Bod}.&nbsp;<a href="${props.ad2.URL}"
													style="text-decoration:underline; font-weight: bold; color: #FF9933;"
													target="_blank">${props.ad2.Call}</a></p>

													<p style="margin-bottom:1em;"><a href="${props.ar3.URL}"
													style="font-weight:bold; text-decoration: none; color: #000000;"
													target="_blank">${props.ar3.Head}</a><br>
												${props.ar3.Bod}&nbsp;<a href="${props.ar3.URL}"
													style="text-decoration:underline; font-weight: bold; color: #FF9933;"
													target="_blank">Read More &gt;&gt;</a></p>

											<p style="margin-bottom:1em;"><a href="${props.ad3.URL}"
													style="font-weight:bold; text-decoration: none; color: #000000;"
													target="_blank">${props.ad3.Head}</a> <span
													style="color:#000000; font-weight:normal; font-size:10px; line-height:12px;">[ad]</span><br>
												${props.ad3.Bod}.&nbsp;<a href="${props.ad3.URL}"
													style="text-decoration:underline; font-weight: bold; color: #FF9933;"
													target="_blank">${props.ad3.Call}</a></p>
										</td>
									</tr>
								</table>
								<table width="100%" bgcolor="#000000" cellpadding="5" cellspacing="0">
				  <tr>
					<td>
					  <p style="margin-top:0.25em; margin-bottom:0.25em; font-size:18px; font-weight: bold; color:#FFFFFF;">&nbsp;&nbsp;SPONSORED CONTENT</p>
					</td>
				  </tr>
				</table>
				  
		  		<table role="presentation" style="width:100%; border:none; border-spacing:0; text-align:left; font-family:Arial,sans-serif; font-size:16px; line-height:18pt; color:#363636; background-color: #FFFFFF;" bgcolor="#FFFFFF">			
  				  <tr>
			  		<td style="padding:10px; background-color:#ffffff;"> 
					  <p style="margin-bottom:1em;"><a href="https://mmptrack.com/click.track?CID=438693&AFID=357302&ADID=2480954&SID=relcont,tci,soar,nl" style="font-weight:bold; text-decoration: underline; color: #FF9933;" target="_blank">5 Best Tech Stocks That Could Soar in 2022</a></p>
				  
        			  <p style="margin-bottom:1em;"><a href="https://tracking.legacyoffers.com/aff_c?offer_id=286&aff_id=1671&eid=MKT627590&externalchannel=tci-email-relcont&aff_sub=tci-relcont-nl-lift3" style="font-weight:bold; text-decoration: underline; color: #FF9933;" target="_blank">Former Goldman Sachs Exec: "America's problems explained in ONE chart"</a></p>
						
        			  <p style="margin-bottom:1em;"><a href="https://www.c7bwtrk.com/5KCWZ2/23JF6C/?source_id=relcont&sub1=tci&sub2=shatter&sub3=nl" style="font-weight:bold; text-decoration: underline; color: #FF9933;" target="_blank">Could Apple's iPhone Killer Shatter Zuck's Metaverse? Click for the Urgent Details.</a></p>						
						<br><br>
				  
				  
			    	  <h1 style="margin-top:0; margin-bottom:1em; font-size:9pt; line-height:15pt; font-weight:bold; letter-spacing:-0.02em; text-align: left">Be sure that you receive future email from The Cheap Investor &ndash; please <a href="https://www.thecheapinvestor.com/tci_whitelisting_instructions.html" style="font-weight:bold; color:#FF9933;" target="_blank">whitelist our email address</a> with your email provider. </h1>
										
    		  		</td>
				  </tr>			  
		  	  	<!--END - HEADING WITH TEXT--> 
		  	  	</table>
			  </td>
			</tr>				  
			<tr>
			  <td style="padding: 10px 10px 10px 10px; color:#FFFFFF;">				   			  
    			<p style="margin-bottom:1em; font-size: 10px; line-height:12px; color:#FFFFFF;">DISCLAIMER: This communication includes advertising material and PAID ADVERTISEMENTS provided to our customers. Stocks and options trading have large potential rewards, but also large potential risk. You must be aware of the risks and be willing to accept them in order to invest in the stocks and options markets. Don't trade with money you can't afford to lose. This is neither a solicitation nor an offer to Buy/Sell stocks or options. No representation is being made that any account will or is likely to achieve profits or losses similar to those discussed in this report. The past performance of any trading system or methodology is not necessarily indicative of future results. All trades, patterns, charts, systems, etc., discussed in this report are for illustrative purposes only and not to be construed as specific advisory recommendations. Information contained in this correspondence is intended for informational purposes only and was obtained from sources believed to be reliable. Information is in no way guaranteed. No guarantee of any kind is implied or possible where projections of future conditions are attempted. For full disclaimer information, <a href="https://thecheapinvestor.com/disclaimer/" target="_blank" style="color:#FF9933;">click here.</a></p>
				  
    			<p style="margin-bottom:1em; font-size: 10px; line-height:12px; color:#FFFFFF;">For Privacy Policy information, click <a href="https://thecheapinvestor.com/privacy-policy/" target="_blank" style="color:#FF9933;">here</a>.</p>
				  
				<p style="margin-bottom:1em; font-size: 10px; line-height:12px; color:#FFFFFF;">At The Cheap Investor, it's our mission to create and provide a community that helps you live a more lucrative and enriched life financially. When The Cheap Investor was established a few years back, we wanted to make the community an inclusive, welcoming table where everyone can come to invest! Over the years, and with thousands of followers across our social media platforms, we will always aim to get better at what we do every single day! In addition, our primary focus is on our relationship with you. This way every time you hang out with us, you end up getting an idea that takes your investment portfolio to the next level. We particularly appreciate when our following provides feedback via testimonials, reviews, and comments left on our site or social media accounts. Because with that feedback, we can use it to make your next investment or stock purchase even better than the last! Since we put so much effort into the relationship with you, we hope that any time spent with us is exactly the way you hoped it would be. Because by choosing to go with The Cheap Investor, it's our promise that we provide a community you will love for years and years to come. Now, as much as we care about helping you make the right investments, we also care about your privacy. The Cheap Investor is owned and operated by TheCheapInvestor.com. We're committed to the right to your privacy and strive to provide a safe and secure user experience. Our Privacy Policy explains how we collect, store and use personal information, provided by you on our website. It also explains how we collect and use non-personal information. By accessing and using our website, you explicitly accept, without limitation or qualification, the collection, use, and transfer of personal information and non-personal information in the manner described in our Privacy Policy. Please read this Policy on our website(s) carefully, as it affects your rights and liabilities under the law. If you disagree with the way we collect and process personal and non-personal information, please do not use this website. This Policy applies to this website as well as all web pages the Company hosts. It regulates the processing of information relating to you and grants both of us various rights with respect to your personal data. It also informs you of how to notify us to stop using your personal information. It also explains important information that ensures we won't abuse the information that you provide to us in good faith. By accessing and using our website, you can trust that what you want to be kept private, will be kept private. If at any time, you would like to read our Privacy Policy and get a better understanding of your rights and liabilities under the law. Feel free to visit our site, find the privacy policy in the footer and read it. If there is something you are concerned about or wish to get more clarity on, please let us know by contacting us at support@thecheapinvestor.com. The Privacy Policy also informs you of how to notify us to stop using your personal information. If you wish to view our official policies, please visit our website <a href="https://thecheapinvestor.com/" target="_blank" style="color:#FF9933;">https://thecheapinvestor.com/.</a></p>
		  	  </td>
			</tr>
		  </table>		
				  
		<p style="margin-bottom:1em; font-size: 10px; line-height:12px; color:#000000; text-align: center;" align="center">{{Sender_Name}}<br>
			{{Sender_Address}}, {{Sender_City}}, {{Sender_State}} {{Sender_Zip}}</p>
			  
		<p style="margin-bottom:1em; font-size: 10px; line-height:12px; color:#000000; text-align: center;" align="center"><a href="{{{unsubscribe}}}" target="_blank" style="color:#FF9933; text-decoration:underline;">UNSUBSCRIBE HERE</a></p>	 

	  <!--END - MAIN CONTENT CONTAINER-->
	  <!--[if mso]>
	  </td>
	  </tr>
	  </table>
	  <![endif]-->
	  <!--END - GHOST TABLE FOR OUTLOOK-->
      </td>
    </tr>
  </table>
  <!--END - OUTER SCAFFOLD-->
</div>	
</body>
</html>`;
};
export default TCI;
