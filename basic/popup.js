'use strict';
var phone_link       = "http://blogs.bvn.com.au/go/phone-list/"
var projects_link    = "http://blogs.bvn.com.au/go/project-library/"
var openasset_link   = "http://blogs.bvn.com.au/go/openasset/"
var archives_link    = ""
var directories_link = "http://blogs.bvn.com.au/go/browse-file-directories/"
var sharefile_link   = "https://bvn.sharefile.com"
var mark_link        = "http://blogs.bvn.com.au/go/bvn-mark/"
var unpaid_link      = "http://blogs.bvn.com.au/go/unpaid-invoices/"
var invoicing_link   = "http://planning.bvn.com.au/E4SE"
var om_link          = "http://blogs.bvn.com.au/go/office-manual/"
var jobnum_link      = "http://blogs.bvn.com.au/go/job-numbers/"
var echosign_link    = "http://blogs.bvn.com.au/go/echosign-digital-signing/"
var wiki_link        = "http://dc2-wiki001/mediawiki/index.php"
var epicor_link      = "http://planning.bvn.com.au/E4SE"
var support_link     = "http://servicedesk.bvn.com.au:8080"

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("Hey guys! The BVN extension seems to have loaded A-OK.");
    $('g').click(function() {
        var fake_a = this.attributes[0].nodeValue;
        if(fake_a =="open-asset"){console.log(fake_a);}
		if(fake_a =="project-library"){console.log(fake_a);}
		if(fake_a =="phonelist"){console.log(fake_a);}
		if(fake_a =="archives"){console.log(fake_a);}
		if(fake_a =="directories"){console.log(fake_a);}
		if(fake_a =="sharefile"){console.log(fake_a);}
		if(fake_a =="styleguide"){console.log(fake_a);}
		if(fake_a =="unpaid"){console.log(fake_a);}
		if(fake_a =="invoicing"){console.log(fake_a);}
		if(fake_a =="office-manual"){console.log(fake_a);}
		if(fake_a =="job-numbers"){console.log(fake_a);}
		if(fake_a =="echosign"){console.log(fake_a);}
		if(fake_a =="wiki"){console.log(fake_a);}
		if(fake_a =="epicor"){console.log(fake_a);}
		if(fake_a =="support"){console.log(fake_a);}
		if(fake_a =="tropos"){console.log(fake_a);}
		if(fake_a =="bloomfire"){console.log(fake_a);}

        //var newURL = this.attributes.href.value;
        //console.log("clicked " + newURL);
        //chrome.tabs.create({'url': newURL});
    });
});
//chrome.tabs.insertCSS(, "man_eng.css");



// var epicor_link = "http://blogs.bvn.com.au/go/extranet/"
// var epicor_link = "http://blogs.bvn.com.au/go/email-manager/"
// var epicor_link = "http://blogs.bvn.com.au/go/technical-bulletins/"
// var epicor_link = "http://blogs.bvn.com.au/go/sustainable-design-knowledge-base/"
// var epicor_link = "http://blogs.bvn.com.au/go/legal-agreements-knowledgebase/"
// var epicor_link = "http://blogs.bvn.com.au/go/business-development/"
// var epicor_link = "http://blogs.bvn.com.au/go/"
// var epicor_link = "http://blogs.bvn.com.au/go/exchange-archives/"
// var epicor_link = "http://blogs.bvn.com.au/go/library/"
// var epicor_link = "http://blogs.bvn.com.au/go/computational-design/"
// var epicor_link = "http://blogs.bvn.com.au/go/bvn-bim/"
// var epicor_link = "http://blogs.bvn.com.au/go/bvn-bim-content/"
// var epicor_link = "http://blogs.bvn.com.au/go/sketchup-bvn/"
// var epicor_link = "http://blogs.bvn.com.au/go/bvn-training/"
// var epicor_link = "http://blogs.bvn.com.au/go/green-office/"
// var epicor_link = "https://email.bvn.com.au/owa/"
// var epicor_link = "http://blogs.bvn.com.au/go/invoicing/"
// var epicor_link = "http://blogs.bvn.com.au/go/tropos-content-management/"
// var epicor_link = "http://blogs.bvn.com.au/go/fax-queue-brisbane/"
// var epicor_link = "http://blogs.bvn.com.au/go/fax-queue-melbourne/"
// var epicor_link = "http://blogs.bvn.com.au/go/fax-queue-sydney/"




"open-asset"
"project-library"
"phonelist"
"archives"
"directories"
"sharefile"
"styleguide"
"unpaid"
"invoicing"
"office-manual"
"job-numbers"
"echosign"
"wiki"
"epicor"
"support"
"tropos"
"bloomfire"