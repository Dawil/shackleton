'use strict';
var phone_link       = "http://phonelist.bvn.com.au:9000/#/people";
var projects_link    = "http://phonelist.bvn.com.au:9000/#/projects/";
var openasset_link   = "http://openasset.bvn.com.au";
var archives_link    = "file://bvn/archives/";
var directories_link = "http://notescorp3.bvn.com.au/bvn/intranet/filebrowser.nsf";
var sharefile_link   = "https://bvn.sharefile.com";
var mark_link        = "http://notescorp3.bvn.com.au/bvn/intranet/bvnmark.nsf";
var unpaid_link      = "http://notescorp3.bvn.com.au/bvn/intranet/invoices.nsf/Invoices+By+Job+Number?OpenView";
var invoicing_link   = "http://notescorp3.bvn.com.au/bvn/intranet/invoices.nsf";
var om_link          = "http://notescorp3.bvn.com.au/bvn/intranet/om.nsf";
var jobnum_link      = "http://notescorp3.bvn.com.au/bvn/intranet/jobnumbers.nsf";
var echosign_link    = "https://bvnarchitecture.echosign.com";
var wiki_link        = "http://dc2-wiki001/mediawiki/index.php";
var epicor_link      = "http://planning.bvn.com.au/E4SE";
var support_link     = "http://servicedesk.bvn.com.au:8080";
var tropos_link      = "http://blogs.bvn.com.au/tropos";
var bloomfire_link   = "https://bvn.bloomfire.com/";

function whenClicked(link, timer){
    chrome.tabs.create({'url': link});
    var payload = ['_trackEvent', "perf",  "clicked", link,      Date.now() - timer];
    //              _trackEvent,  category, action,   opt_label, opt_value,           opt_noninteraction)
    _gaq.push(payload);
    console.log(payload);
};

(function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = 'https://ssl.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-93352-12']);
    _gaq.push(['_trackPageview']);

document.addEventListener("DOMContentLoaded", function(event) {

    console.log("Hey guys! The BVN extension seems to have loaded A-OK.");
    var timer = Date.now();

    $('g').click(function() {
        var fake_a = this.attributes[0].nodeValue;
        if (fake_a == "tropos")          {whenClicked(tropos_link      , timer);     }
        if (fake_a == "bloomfire")       {whenClicked(bloomfire_link   , timer);  }
        if (fake_a == "open-asset")      {whenClicked(openasset_link   , timer);  }
        if (fake_a == "project-library") {whenClicked(projects_link    , timer);   }
        if (fake_a == "phonelist")       {whenClicked(phone_link       , timer);      }
        if (fake_a == "archives")        {whenClicked(archives_link    , timer);   }
        if (fake_a == "directories")     {whenClicked(directories_link , timer);}
        if (fake_a == "sharefile")       {whenClicked(sharefile_link   , timer);  }
        if (fake_a == "styleguide")      {whenClicked(mark_link        , timer);       }
        if (fake_a == "unpaid")          {whenClicked(unpaid_link      , timer);     }
        if (fake_a == "invoicing")       {whenClicked(invoicing_link   , timer);  }
        if (fake_a == "office-manual")   {whenClicked(om_link          , timer);         }
        if (fake_a == "job-numbers")     {whenClicked(jobnum_link      , timer);     }
        if (fake_a == "echosign")        {whenClicked(echosign_link    , timer);   }
        if (fake_a == "wiki")            {whenClicked(wiki_link        , timer);       }
        if (fake_a == "epicor")          {whenClicked(epicor_link      , timer);     }
        if (fake_a == "support")         {whenClicked(support_link     , timer);    }
    });
});