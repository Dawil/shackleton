'use strict';
var phone_link       = "http://blogs.bvn.com.au/go/phone-list/";
var projects_link    = "http://phonelist.bvn.com.au:9000/#/projects/";
var openasset_link   = "http://blogs.bvn.com.au/go/openasset/";
var archives_link    = "archives are somewhere back here...";
var directories_link = "http://blogs.bvn.com.au/go/browse-file-directories/";
var sharefile_link   = "https://bvn.sharefile.com";
var mark_link        = "http://blogs.bvn.com.au/go/bvn-mark/";
var unpaid_link      = "http://blogs.bvn.com.au/go/unpaid-invoices/";
var invoicing_link   = "http://planning.bvn.com.au/E4SE";
var om_link          = "http://blogs.bvn.com.au/go/office-manual/";
var jobnum_link      = "http://blogs.bvn.com.au/go/job-numbers/";
var echosign_link    = "http://blogs.bvn.com.au/go/echosign-digital-signing/";
var wiki_link        = "http://dc2-wiki001/mediawiki/index.php";
var epicor_link      = "http://planning.bvn.com.au/E4SE";
var support_link     = "http://servicedesk.bvn.com.au:8080";
var tropos_link      = "http://blogs.bvn.com.au/tropos";
var bloomfire_link   = "https://bvn.bloomfire.com/";

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Hey guys! The BVN extension seems to have loaded A-OK.");
    $('g').click(function() {
        var fake_a = this.attributes[0].nodeValue;
        if(fake_a == "tropos"){
        	console.log(tropos_link);
        	chrome.tabs.create({'url': tropos_link});
        }
        if(fake_a == "bloomfire"){
        	console.log(bloomfire_link);
        	chrome.tabs.create({'url': bloomfire_link});
        }
        if(fake_a == "open-asset"){
        	console.log(openasset_link);
        	chrome.tabs.create({'url': openasset_link});
        }
		if (fake_a == "project-library") {
		    console.log(projects_link);
		    chrome.tabs.create({'url': projects_link});
		}
		if (fake_a == "phonelist") {
		    console.log(phone_link);
		    chrome.tabs.create({'url': phone_link});
		}
		if (fake_a == "archives") {
		    console.log(archives_link);
		    chrome.tabs.create({'url': archives_link});
		}
		if (fake_a == "directories") {
		    console.log(directories_link);
		    chrome.tabs.create({'url': directories_link});
		}
		if (fake_a == "sharefile") {
		    console.log(sharefile_link);
		    chrome.tabs.create({'url': sharefile_link});
		}
		if (fake_a == "styleguide") {
		    console.log(mark_link);
		    chrome.tabs.create({'url': mark_link});
		}
		if (fake_a == "unpaid") {
		    console.log(unpaid_link);
		    chrome.tabs.create({'url': unpaid_link});
		}
		if (fake_a == "invoicing") {
		    console.log(invoicing_link);
		    chrome.tabs.create({'url': invoicing_link});
		}
		if (fake_a == "office-manual") {
		    console.log(om_link);
		    chrome.tabs.create({'url': om_link});
		}
		if (fake_a == "job-numbers") {
		    console.log(jobnum_link);
		    chrome.tabs.create({'url': jobnum_link});
		}
		if (fake_a == "echosign") {
		    console.log(echosign_link);
		    chrome.tabs.create({'url': echosign_link});
		}
		if (fake_a == "wiki") {
		    console.log(wiki_link);
		    chrome.tabs.create({'url': wiki_link});
		}
		if (fake_a == "epicor") {
		    console.log(epicor_link);
		    chrome.tabs.create({'url': epicor_link});
		}
		if (fake_a == "support") {
		    console.log(support_link);
		    chrome.tabs.create({'url': support_link});
		}
    });
});