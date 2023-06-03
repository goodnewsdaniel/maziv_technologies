/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["Readme.md","fc3ec281017053ec89409c9f201716c0"],["assets/css/style.css","f1e781817fd6fc176e9449e15f825e03"],["assets/img/Illustrations/Background/App Background 001.jpg","dda7149a1e0c6931ec2cb9e62f6b4ca6"],["assets/img/Illustrations/Background/App Background 002.jpg","c14420837b39bb186284d882673c1741"],["assets/img/Illustrations/Background/App Background 003.jpg","5d4dfbaf59d639046614de2cd840f443"],["assets/img/Illustrations/Background/App Background 004.jpg","3029dc5e0d1045abbbbc6319b3bdee94"],["assets/img/Illustrations/Background/software background 001.jpg","b7dddd320c57738654c18aac468a39af"],["assets/img/Illustrations/Background/software background 002.jpg","95a56709e32ad0adf13646a926e75ca5"],["assets/img/Illustrations/Background/software_background_002-removebg-preview.png","6d5f06a48f00125371ef3dcdb332d857"],["assets/img/Illustrations/Background/website background 001.jpg","540bb25d203e77e32089cfcffb8b79aa"],["assets/img/Illustrations/Background/website background 002.jpg","553a6b43ba37a1a9a66b41565fb40264"],["assets/img/Illustrations/Background/website background 003.jpg","ada1cda3224e06a0a47ff3d987e726c3"],["assets/img/Illustrations/IT Consulting 1.jpg","f63bc60e5af4f5dc528cd4af218d11cc"],["assets/img/Illustrations/IT Consulting.jpg","b60c0de2a3704dc592ecbc68be7c7a6e"],["assets/img/Illustrations/UI Design.jpg","38083f9c7a0b547a3d70902259a3d4bc"],["assets/img/Illustrations/UX DESIGN.jpg","498a8a5fd8966681955411251722c0d4"],["assets/img/Illustrations/User XP.jpg","90fc5592cea5843f02d2fcccb0e33b37"],["assets/img/Illustrations/Web dev 1.jpg","7518f29aa7fe905b9afdbf6a5f818333"],["assets/img/Illustrations/Web developer.jpg","2e88435fc8a95ebb155e0347ec04bcad"],["assets/img/Illustrations/best web design.jpg","c6e596b0d2621ac38d450c892c1d1cc8"],["assets/img/Illustrations/co-working space.jpg","c30c8b12a138eb2e5adfcad9e480dbaf"],["assets/img/Illustrations/legal_illustration_001.jpg","042bc45c5730d43d7c7088915c403421"],["assets/img/Illustrations/medical_illustration_001.jpg","7c2b05ee78dc765cf577189801823c4e"],["assets/img/Illustrations/medical_illustration_002.jpg","c264399370ac5c6a1b5adf2f465bf0e4"],["assets/img/Illustrations/medical_illustration_003.jpg","ac57a95bc0c0299743dc3ea270a4927a"],["assets/img/Illustrations/mobile APP design 1.jpg","506343ec2307c78982c4ab3928646f8d"],["assets/img/Illustrations/mobile APP design 2.jpg","b1403e0d284d74ac6b6fc052b03a26b7"],["assets/img/Illustrations/mobile app.jpg","b262efd9822b4d8d64ac117c123a786e"],["assets/img/Illustrations/online shop.jpg","8af951c11ed8d09716d79994c613053d"],["assets/img/Illustrations/online store buyer.jpg","a298677daaeca3e8f7128266388005ba"],["assets/img/Illustrations/programming 2.jpg","c98e5eb86ffca9873721e1d6e43142f8"],["assets/img/Illustrations/programming languages.jpg","57ca9aa189581e4848327ebf18b7b201"],["assets/img/Illustrations/programming.jpg","e8ce12362beaa90fb87bac36e3f22d10"],["assets/img/Illustrations/school_illustration_001.jpg","247eaf6eae33f2f046ce6e11ca13a8cd"],["assets/img/Illustrations/school_illustration_002.jpg","0f747f462483ac30872500134e2257a3"],["assets/img/Illustrations/school_illustration_003.jpg","696e5fc9347a9ff83a7a28589a3c2bdc"],["assets/img/Illustrations/software dev.jpg","f1dec90e30158b3d03362bc2a19c17bd"],["assets/img/Illustrations/web design process.jpg","615cda73fb3a6ef3d2a77c032e8cbcf1"],["assets/img/Illustrations/web design.jpg","3719229e472ca1abc51882144633ce66"],["assets/img/Illustrations/web development blob.jpg","51474bc89989c0256842822f87677524"],["assets/img/Illustrations/website desgin.jpg","a405651921219709a312a1083f390668"],["assets/img/Illustrations/wed design2.jpg","c4345afdafe8e89670852359878f5eb0"],["assets/img/Maziv_About_Us-removebg-preview.png","8a1c2abcf87b5c98abfb01b1a9836876"],["assets/img/Maziv_About_Us.jpg","a533a9da726ffd425445cdd8a4b01984"],["assets/img/Maziv_Hero_Image-removebg.png","bc1ad23605f42f1f9e92c3d447f9e51d"],["assets/img/Maziv_Skills-removebg-preview.png","237131991866ebb0e4d07ef63db6b9c3"],["assets/img/Maziv_Why_Us.jpg","b61ecdfafc2802253013b4a1531a488e"],["assets/img/Maziv_Why_Us_2-removebg-preview.png","59f07c8b438162144a4d20ff8063d592"],["assets/img/Maziv_Why_Us_2.jpg","8c351311aeeae95b35f9db24ba884e40"],["assets/img/Web development _Outline.svg","33d2bb7e2dee9cbbead19c203cfb9b3c"],["assets/img/about-us.jpg","4cac8e2b88b29b03cf5e87c5d40f9873"],["assets/img/clients/client-1.png","43b197a638e4a1b06eabc8798853b6ad"],["assets/img/clients/client-2.png","e2a4a32027143c12ba8ae4773e9ad127"],["assets/img/clients/client-3.png","62e6ddc7b2afce47a7395fbebc5ac002"],["assets/img/clients/client-4.png","d67b707c39afd3281888c198c807c680"],["assets/img/clients/client-5.png","cb2b1e765cecbf46c3e923624abda68c"],["assets/img/clients/client-6.png","089f8364b3c1226af6e689f869b08c63"],["assets/img/coder.svg","f131631cccd379c3e31f7ecca6ffc07a"],["assets/img/education_icons/001-online-course.png","daf3e87338169d9b7c9230e0a071d472"],["assets/img/education_icons/002-education.png","aa70d77e3280e33aa52ecd0a399a08ec"],["assets/img/education_icons/003-education-1.png","350ae51ce0ced7da50d0eddc4cfe3272"],["assets/img/education_icons/004-training.png","d8be388e08abe6ff2f28a942b5fa51b1"],["assets/img/education_icons/005-education-2.png","806b61aa0cc7c7bb5d5e57a8b2d3dd4d"],["assets/img/education_icons/006-scholarship.png","9258027daa04b0f9e41047fd2d81f8d3"],["assets/img/education_icons/007-book.png","a68f3f4fbd137e3f8660be8c1cb2b342"],["assets/img/education_icons/008-education-3.png","a7ebdc254b4a0975eb698e971b0106ac"],["assets/img/education_icons/009-idea.png","391d6f9a67468694b794e5c61a0c27af"],["assets/img/education_icons/010-online-learning.png","8b10f17f5ee1594b63c522ecc82def7b"],["assets/img/education_icons/011-education-4.png","8724fe3646213d96add1687bf4401f3f"],["assets/img/education_icons/012-education-5.png","9e73b1cd39a29e2df029099714c38178"],["assets/img/education_icons/013-graduation-cap.png","cedfc29e775a4a403881f88e068b715a"],["assets/img/education_icons/014-mortarboard.png","7cf0bb5a7b28c88f655d106d815e875c"],["assets/img/education_icons/015-students.png","dfa6ec70c4191143b25598e0e8e53131"],["assets/img/education_icons/016-mortarboard-1.png","9222e568a23a3b6df33a1b78a498a862"],["assets/img/education_icons/017-presentation.png","1b50c6a93a26b59de0b0aee12f237004"],["assets/img/favicons/about.txt","fada86f1f16e514c931314d3eaf397b2"],["assets/img/favicons/android-chrome-192x192.png","85b8b46dd1ef755f13075f579268f885"],["assets/img/favicons/android-chrome-512x512.png","73feff32a5b7b228122e7fbbc301dbfc"],["assets/img/favicons/apple-touch-icon.png","abb0e2374170a19f91444cb4be686524"],["assets/img/favicons/favicon-16x16.png","1cfa1caa257afdd247dd88070a3d8000"],["assets/img/favicons/favicon-32x32.png","f3c8a21670bf4658779563b0161dbc5c"],["assets/img/favicons/favicon.ico","aea0ea65adf748461d6b1c1f0189cc6c"],["assets/img/favicons/site.webmanifest","053100cb84a50d2ae7f5492f7dd7f25e"],["assets/img/hero-img.png","fdff2e0c20daa2c478adc357562ab34d"],["assets/img/legal_icons/019-judge.png","f3729cdfc4b52b845e61290e6f66145e"],["assets/img/legal_icons/020-scale.png","9eef7016208ca201e53ebe3041db0d8b"],["assets/img/legal_icons/021-legal-document.png","a82c19a62de9eab8119f632bdc865ce5"],["assets/img/legal_icons/022-legal-system.png","699489da66e4c6bd9d7975afac04c41a"],["assets/img/legal_icons/023-law.png","13aee2969ce5464f9452e33be499cd30"],["assets/img/legal_icons/024-auction.png","c925907444b7d7b5949f1ead057cbeba"],["assets/img/legal_icons/025-legal-document-1.png","cad7f1d312d7584160a3ec687ca5b99d"],["assets/img/legal_icons/026-balance.png","7729b3b706a05cbe51fbf7d3bc0c0268"],["assets/img/legal_icons/027-legal.png","93c9fbb56e944a952e9f95ac358b10a9"],["assets/img/legal_icons/028-policy.png","9e16087516f165b45545c1c77e66e73e"],["assets/img/legal_icons/029-file.png","933f1f2c6b7449c2476115987f997bd1"],["assets/img/legal_icons/030-law-scale.png","e2cdc5a39f4514a0facee0115679d3c5"],["assets/img/legal_icons/031-balance-1.png","6f2065d0f5c1972d0f518a43d3d786db"],["assets/img/legal_icons/032-compromise.png","0f02aac420194417191a4db4ec60247f"],["assets/img/legal_icons/033-judgment.png","241bd650a3f852cdae84ed39a7df6d7f"],["assets/img/legal_icons/034-stamp.png","e8f7d33bb273f16e2accd899f8900c97"],["assets/img/logo/Maziv_technologies_logo-removebg-preview.png","c4732477798a28e7455fd7d1c9fdc921"],["assets/img/logo/apple-touch-icon.png","89d2099bba4e6cd45aece01b63ff6b31"],["assets/img/logo/favicon.ico","12beeaf8e18c7b708315f9e041647fde"],["assets/img/logo/maziv software.png","572d9270b8a1260bf72431f6b5260bb3"],["assets/img/logo/maziv_software-removebg-preview.png","d6243cce205013d8fdb88cbfa73fc45c"],["assets/img/logo/maziv_tech_bold_logo.png","0602dc5564910dd37622a64a6ef2ee56"],["assets/img/medical_icons/001-medical-care.png","529128f4467115ec555d6a6c1814f793"],["assets/img/medical_icons/002-consultation.png","44b4949deab94d87b4456723df1e926a"],["assets/img/medical_icons/003-drug.png","5b76baccd6949dba82e9f54adba18f01"],["assets/img/medical_icons/004-medical-symbol.png","8981bc95537cbab93c03551525ccf8b5"],["assets/img/medical_icons/005-first-aid-kit.png","cc7505ffcb1cd1c14a991ae0d7be53f9"],["assets/img/medical_icons/006-cardiogram.png","e85b4b04453e890746b15b0dbbffaa37"],["assets/img/medical_icons/007-medical-history.png","313c05568fe066a050f645f7079f5b21"],["assets/img/medical_icons/008-healthcare.png","282ee81441651216665a382ad903ebcb"],["assets/img/medical_icons/009-doctor.png","9f1f6e41fef6d2b3b696d2bd3e51d38a"],["assets/img/medical_icons/010-first-aid-kit-1.png","1185268f89d4c77723774de9daf917b9"],["assets/img/medical_icons/011-health-insurance.png","ff2f6f44a64e23279391111d5b67e66d"],["assets/img/medical_icons/012-hospital.png","801366d6e2401bebd0b8586144c23d73"],["assets/img/medical_icons/013-medical-symbol-1.png","eee58af096c2b4ae8f52f0b8427c0ac5"],["assets/img/medical_icons/014-medical-chechup.png","95952c99c614ea748db6c19cee1ff126"],["assets/img/medical_icons/015-medical-equipment.png","318b403b1474304685147d6b3db47203"],["assets/img/medical_icons/016-medical-checkup.png","c8f12dd87ac7ba25e5d70a15e783ae4b"],["assets/img/medical_icons/017-capsules.png","00208ee32c4ebe0afea2478e841f439b"],["assets/img/medical_icons/018-x-rays.png","47240a0406ac6b2299bf9e7ef7ec042c"],["assets/img/skills.png","fc4d90478adb94e10e2edb8a4b758574"],["assets/img/software icons/001-web-development.png","fb1d932bebc84eff92a91384818cf473"],["assets/img/software icons/002-content.png","1c2788ea8eb5dd3876d4fcb22c15e40e"],["assets/img/software icons/003-web-development-1.png","fcc2ec150e06bf07bf822eceee26e548"],["assets/img/software icons/004-software.png","aad22a07e663a04bb725a58dd95b4eb0"],["assets/img/software icons/005-web-development-2.png","f6bbc9654befe71013e28266562050c2"],["assets/img/software icons/006-coding.png","c34d48c22b3d1dfb2f44c3087a68fcd8"],["assets/img/software icons/007-algorithms.png","7ef9b903d4ca88e2f0f7d87fcbb97196"],["assets/img/software icons/008-software-development.png","f3df16ecb3b5e258313293dcce97f5f9"],["assets/img/software icons/009-developer.png","0b73ccd1d0493797c3a9cda4a4c2292e"],["assets/img/software icons/010-web-development-3.png","3d62100a519f452e796c43704beef0a8"],["assets/img/software icons/011-software-development-1.png","62111a1280aed39b311e5ecaa9549aa2"],["assets/img/software icons/012-app-development.png","7511ebb1aaffa486853fc432b476061b"],["assets/img/software icons/013-coding-1.png","dff09cd855c4c69fe0d3911ac8ce37f1"],["assets/img/software icons/014-coding-2.png","41fbf98521e78bb71fc9a54f65700575"],["assets/img/software icons/015-mobile-app.png","7da424d551255d42f5b4e7a53eef8bca"],["assets/img/software icons/016-layers.png","2de36b280f42e20b91ec017a91284d08"],["assets/img/software icons/017-software-development-2.png","76e99b60614a7477e174bd113c13e4d6"],["assets/img/software icons/018-code.png","c1d505cf6cf37bc5e9d4b0888aa99128"],["assets/img/software icons/019-software-development-3.png","d63100711a5b551d69b7126a3d038079"],["assets/img/software icons/020-testing.png","81808d22fb3109dedd2485d777e2f933"],["assets/img/software icons/021-software-development-4.png","139e9a0ccb2ee6aed766d367df98dade"],["assets/img/software icons/022-programmer.png","15c0cbfc5e1bc0dc3564788cf3cc9aa2"],["assets/img/software icons/023-code-1.png","3c6eca9e3438ac10e395096b0c552b6f"],["assets/img/software icons/024-coding-3.png","ee3575420e59bf9e8468c3292a2eafe3"],["assets/img/software icons/025-software-development-5.png","4d6f9d2ab590c9a648c08cad1d552366"],["assets/img/software icons/026-custom.png","eebb3a010338ad9f7e0178bec9f0f1ff"],["assets/img/software icons/027-backend.png","6c64b1d406604b7c92b8de4f9166eb2e"],["assets/img/software icons/028-social-media.png","c37024766979e34fe20f676d6b844a71"],["assets/img/software icons/029-digital-marketing.png","093db66eb1e94cebcd9c7c76a9824b87"],["assets/img/software icons/030-chart.png","ec43719a6558156d9ff374cc259830fc"],["assets/img/software icons/032-consultation.png","7e08e90957e1ab3880e354653624b2e0"],["assets/img/software icons/033-brainstorming.png","c7d49e1504fc7b826e654d62aaf256b6"],["assets/img/software icons/consulting_01.png","07c39f7d8d9895099850d5ecb5e9b34f"],["assets/img/team/team-1.png","fa6e6d2c3a28c885df63c50696c8cb42"],["assets/img/team/team-2.jpg","2451fb86051ef9b388b03dbd97953927"],["assets/img/team/team-3.jpg","2d3913707e8be39dca0d27db9d05aebb"],["assets/img/team/team-4.jpg","237c2c5ea3583f893d95b59b12d5716b"],["assets/img/team/team.jpg","6199a2ce6421905f001e3046c02bf336"],["assets/img/why-us.png","8185cbd67f67425eb0eca553b5a6c8c9"],["assets/js/contact.js","d5b3fec23b8efc4698f1f0b9f792c73f"],["assets/js/cookie.js","fd54787fdb835806dc01c917ac8858d2"],["assets/js/emailsub.js","d7c8a85d818d06eac9465456eb4af575"],["assets/js/main.js","63ffb1b24984b8a3154cb89246abe162"],["assets/js/service-request.js","9dee16dd48e723b878f3b19ee3bddf16"],["assets/js/sw-register.js","adf7a2429b7ee306d2c7c2916f31d399"],["assets/libraries/aos/aos.css","847da8fca8060ca1a70f976aab1210b9"],["assets/libraries/aos/aos.js","d3718e34eeb0355be8e3179a2e2bccb7"],["assets/libraries/bootstrap-icons/bootstrap-icons.css","ea83ae92c684331d2096c4d3306a04de"],["assets/libraries/bootstrap-icons/bootstrap-icons.json","9c05cc16dfd125751f9c4ab0a6294fe7"],["assets/libraries/bootstrap-icons/fonts/bootstrap-icons.woff","7fb23f3b56a834d9dcf615b5e7c78da8"],["assets/libraries/bootstrap-icons/fonts/bootstrap-icons.woff2","e07b538aa51b6fa77f32828af21cb591"],["assets/libraries/bootstrap-icons/index.html","5bd0231cfd71c50c8c78bb4323da253b"],["assets/libraries/bootstrap/css/bootstrap-grid.css","cf899c195cc89ca44260188a3fed4812"],["assets/libraries/bootstrap/css/bootstrap-grid.css.map","a4eb69f381bc7b999ab14dcfb0efc2d0"],["assets/libraries/bootstrap/css/bootstrap-grid.min.css","e7454e3d83e72389589dfe366a238dea"],["assets/libraries/bootstrap/css/bootstrap-grid.min.css.map","7f3903bb8598481720ebdf41871729ad"],["assets/libraries/bootstrap/css/bootstrap-grid.rtl.css","0e054821afd8cb106be0a27e31c585d2"],["assets/libraries/bootstrap/css/bootstrap-grid.rtl.css.map","450e176760f4e7076608301be256b97b"],["assets/libraries/bootstrap/css/bootstrap-grid.rtl.min.css","b1d4aae859210b344e9f8d788d09d86b"],["assets/libraries/bootstrap/css/bootstrap-grid.rtl.min.css.map","9c513f8c92e8349ac5c53f82560e2fcc"],["assets/libraries/bootstrap/css/bootstrap-reboot.css","6f135d88e922000f7d6d219715e701c5"],["assets/libraries/bootstrap/css/bootstrap-reboot.css.map","cb963247ca596cb9cdd274b45e60c51d"],["assets/libraries/bootstrap/css/bootstrap-reboot.min.css","0c7f9cfae220c82739af646b99c9adc5"],["assets/libraries/bootstrap/css/bootstrap-reboot.min.css.map","9145e8bfaab5da60f7597f14dc3df48c"],["assets/libraries/bootstrap/css/bootstrap-reboot.rtl.css","dcae73d819a339ba3d6e648f38ed9e39"],["assets/libraries/bootstrap/css/bootstrap-reboot.rtl.css.map","35a012269edc48e2bf014454bb1a3945"],["assets/libraries/bootstrap/css/bootstrap-reboot.rtl.min.css","48d2515c394ecf3b10b81a64a4acfd57"],["assets/libraries/bootstrap/css/bootstrap-reboot.rtl.min.css.map","d86e44129126084428a3cc92301739bb"],["assets/libraries/bootstrap/css/bootstrap-utilities.css","ce630c48b6c76b26f5a4938acc87df5e"],["assets/libraries/bootstrap/css/bootstrap-utilities.css.map","7b8e4e64b5304ae1798d4c0945c00b30"],["assets/libraries/bootstrap/css/bootstrap-utilities.min.css","a35a29ce7d65f08821b7a515edc5d5aa"],["assets/libraries/bootstrap/css/bootstrap-utilities.min.css.map","e4d4e76abc6f60150a3c3add50c0a048"],["assets/libraries/bootstrap/css/bootstrap-utilities.rtl.css","7c8346b318321e3101bd89205c48cd8c"],["assets/libraries/bootstrap/css/bootstrap-utilities.rtl.css.map","4ad7c88ffe2b95f51ca9280acca48e1c"],["assets/libraries/bootstrap/css/bootstrap-utilities.rtl.min.css","048af6e1c02b736476794b35fcf2ecde"],["assets/libraries/bootstrap/css/bootstrap-utilities.rtl.min.css.map","178606d53e6760a7216eaf4422737160"],["assets/libraries/bootstrap/css/bootstrap.css","f6e962ab807e8058302d1272f059fe45"],["assets/libraries/bootstrap/css/bootstrap.css.map","1e1403b4db1d4b8426989bb2602fb845"],["assets/libraries/bootstrap/css/bootstrap.min.css","8880ffcc419e92bf8d438a199b8a82d4"],["assets/libraries/bootstrap/css/bootstrap.min.css.map","c48fe844f1ac309b963dec220cad4326"],["assets/libraries/bootstrap/css/bootstrap.rtl.css","d93015b59c22f73eb235f5701f38a844"],["assets/libraries/bootstrap/css/bootstrap.rtl.css.map","5552892ca514d802a38a5058f6cca5cb"],["assets/libraries/bootstrap/css/bootstrap.rtl.min.css","6d7fa20ffe03df35f3503962b9eb0648"],["assets/libraries/bootstrap/css/bootstrap.rtl.min.css.map","a346b256320f730ed9b495c36e967b9e"],["assets/libraries/bootstrap/js/bootstrap.bundle.js","5897b2158dd1236d6ece1099991dcf44"],["assets/libraries/bootstrap/js/bootstrap.bundle.js.map","8798737ad8c76ef0e863532ce38299ad"],["assets/libraries/bootstrap/js/bootstrap.bundle.min.js","8831aa095cdec88f66c2e46c339cf352"],["assets/libraries/bootstrap/js/bootstrap.bundle.min.js.map","c904be4184f5b32278befd85edb526c4"],["assets/libraries/bootstrap/js/bootstrap.esm.js","356b5745959fe3ee31b2ad95453e9ef8"],["assets/libraries/bootstrap/js/bootstrap.esm.js.map","32001e141fbe2f9f9410ec10d8650a4e"],["assets/libraries/bootstrap/js/bootstrap.esm.min.js","9bce7dc2435aa027f8803a576b9ee702"],["assets/libraries/bootstrap/js/bootstrap.esm.min.js.map","0b17d72567e538a3d6fec7849b6e571d"],["assets/libraries/bootstrap/js/bootstrap.js","79b0236a5c469be970cf864236848729"],["assets/libraries/bootstrap/js/bootstrap.js.map","98e3e9170c554a07f3a8bb54e5355f26"],["assets/libraries/bootstrap/js/bootstrap.min.js","b5730588db13e71c65bdb1d234089260"],["assets/libraries/bootstrap/js/bootstrap.min.js.map","b3d5e224e7d0fe9b50d78af1ffe98f45"],["assets/libraries/boxicons/css/animations.css","2c0319e25c5cb233f4c6cf5e69d83fa3"],["assets/libraries/boxicons/css/boxicons.css","34d3c5ccf488cba5183e0bf7e5aed91f"],["assets/libraries/boxicons/css/boxicons.min.css","0ad3506ed6b1e7942657f8d6e650bdd7"],["assets/libraries/boxicons/css/transformations.css","d5afab8d6fa009e5bf06744ef93003f1"],["assets/libraries/boxicons/fonts/boxicons.eot","342c527555cfdb9d35b5dd5629b3fa37"],["assets/libraries/boxicons/fonts/boxicons.svg","dad92ba1a4eed23afdbd3df53657fe9a"],["assets/libraries/boxicons/fonts/boxicons.ttf","8829e87f7fef25fef075707895401297"],["assets/libraries/boxicons/fonts/boxicons.woff","86708f260a765d37cce51959dc4c097d"],["assets/libraries/boxicons/fonts/boxicons.woff2","b5e3cc0c6aa650c9e3ba523df059dc17"],["assets/libraries/claymorphism-css/README.md","b914aeb8d33d3e789ab2351b3003d584"],["assets/libraries/claymorphism-css/dist/clay.css","be9a0e320d4708a8b742ede7f7a0dc46"],["assets/libraries/claymorphism-css/dist/clay.css.map","5d60db5a2528763d62f424e5737dfe51"],["assets/libraries/claymorphism-css/dist/clay.scss","40147429d62ade4c3dddada287476201"],["assets/libraries/claymorphism-css/package.json","4ae16b9a8499777cca29d33f2a34e4e8"],["assets/libraries/emailjs-com/README.md","8bc2f6fca03435ff5bb863fe38b406b8"],["assets/libraries/emailjs-com/cjs/api/sendPost.js","e72adc9185a3e6d476d80e0c2ec01d59"],["assets/libraries/emailjs-com/cjs/index.js","4b34a1dff5cdde7a2f1505e909dad78c"],["assets/libraries/emailjs-com/cjs/methods/init/init.js","339d7d8f23637caf9f414040613b40c2"],["assets/libraries/emailjs-com/cjs/methods/send/send.js","041961ce3feb1018fa09658b7f6e489c"],["assets/libraries/emailjs-com/cjs/methods/sendForm/sendForm.js","725e6d484019129dc8aa8a0e9b54630e"],["assets/libraries/emailjs-com/cjs/models/EmailJSResponseStatus.js","2bc4c723180e5b214c0b8178ad6476d9"],["assets/libraries/emailjs-com/cjs/store/store.js","df70482dd3d54ab135c8cd9612e74f61"],["assets/libraries/emailjs-com/cjs/utils/validateParams.js","39d66de96908ef2ddfdd8b145c4b3d15"],["assets/libraries/emailjs-com/dist/email.js","2836cfa4bdcbc54c7de72660287b0376"],["assets/libraries/emailjs-com/dist/email.min.js","53ddfd251c7aafb11e1108b4513af583"],["assets/libraries/emailjs-com/es/api/sendPost.d.ts","b2836fbf986d0582dec9863eb2d6cc52"],["assets/libraries/emailjs-com/es/api/sendPost.js","7988b67cdab8c690ca63cbe55bf725aa"],["assets/libraries/emailjs-com/es/index.d.ts","a1686df35ba4969a859acd86bda655b9"],["assets/libraries/emailjs-com/es/index.js","5787e7f3cc1b169cb2d75a6de5effebb"],["assets/libraries/emailjs-com/es/methods/init/init.d.ts","105727904ca3d45b9479e2bb48f04a3b"],["assets/libraries/emailjs-com/es/methods/init/init.js","d2d482bc43d9872c2b3c5d7085a80969"],["assets/libraries/emailjs-com/es/methods/send/send.d.ts","1ff84caf6e17ac8e76f7353f9aa910aa"],["assets/libraries/emailjs-com/es/methods/send/send.js","c2337b8932308657948636b24312cc4c"],["assets/libraries/emailjs-com/es/methods/sendForm/sendForm.d.ts","1f62b91ce2f6728ace757648de0229de"],["assets/libraries/emailjs-com/es/methods/sendForm/sendForm.js","3041221a63e824ec590f8f94d8bdc28c"],["assets/libraries/emailjs-com/es/models/EmailJSResponseStatus.d.ts","5b3cfa513436e220d97ee641737c94c0"],["assets/libraries/emailjs-com/es/models/EmailJSResponseStatus.js","fda844f4172adc19878e8d5ad53a890b"],["assets/libraries/emailjs-com/es/store/store.d.ts","9a727dd948d7ea726b17433c2a506275"],["assets/libraries/emailjs-com/es/store/store.js","12f35a4bced888bcddc923a0c26bf8de"],["assets/libraries/emailjs-com/es/utils/validateParams.d.ts","e15dfbd45d0ccf7d68591e767495f0d9"],["assets/libraries/emailjs-com/es/utils/validateParams.js","cb3f23248fa0843d4ff7454a7cee5245"],["assets/libraries/emailjs-com/package.json","b9363a2f9ab21fcfe6f359e39d9988b0"],["assets/libraries/glightbox/css/glightbox.css","7e2604695f55c59e5219b538a157d1b4"],["assets/libraries/glightbox/css/glightbox.min.css","f69035b3cab21535649707f30303196f"],["assets/libraries/glightbox/js/glightbox.js","1638ff0a89b762d4e471acd796f5acce"],["assets/libraries/glightbox/js/glightbox.min.js","3a40d59d5244ad9921c81ca45f3ac8e7"],["assets/libraries/isotope-layout/isotope.pkgd.js","8896e082b3fa1738e2e2f558a7fc1fa4"],["assets/libraries/isotope-layout/isotope.pkgd.min.js","2afcff647ed260006faa71c8e779e8d4"],["assets/libraries/purecounter/purecounter.js","50d43f946b9312e26d9bea785d92e17e"],["assets/libraries/remixicon/remixicon.css","a8aec561d3b9b905472b815cb2b818c2"],["assets/libraries/remixicon/remixicon.eot","31d28485e1cf7369272270fd730327c0"],["assets/libraries/remixicon/remixicon.less","c3720bb948a2bc7dbc1935a7d6a3e44c"],["assets/libraries/remixicon/remixicon.svg","95138f36e015ad912c37db92164f5844"],["assets/libraries/remixicon/remixicon.symbol.svg","f09b1c7476e28ad67f1c2f2f314230a0"],["assets/libraries/remixicon/remixicon.ttf","888e61f04316f10bddfff7bee10c6dd0"],["assets/libraries/remixicon/remixicon.woff","881fbc46361e0c0e5f003c159b2f3005"],["assets/libraries/remixicon/remixicon.woff2","9915fef980fa539085da55b84dfde760"],["assets/libraries/swiper/swiper-bundle.min.css","a5f577cca485379c4aacc2a6cd5ec365"],["assets/libraries/swiper/swiper-bundle.min.js","acdd06efcdb1fad5701c48186f8a9fe9"],["assets/libraries/typed/typed.js","4936d383d5e0676e1bd71b80ef28500d"],["assets/libraries/typed/typed.min.js","477fdd6405150093080290d2e8153eac"],["assets/libraries/typed/typed.min.js.map","d31cbcb5e5289e53ed50d1e67f47f1f9"],["assets/libraries/waypoints/noframework.waypoints.js","8c601d5f892e9a29c3dd204025f9d724"],["index.html","616cb6a7ea40d10cca30ec17a231d0d4"],["manifest.json","aa087c88c11676af19018b57bcf8496b"],["node_modules/@emailjs/browser/README.md","5696b57fdba1db08e0d5a2024272b076"],["node_modules/@emailjs/browser/cjs/api/sendPost.js","e72adc9185a3e6d476d80e0c2ec01d59"],["node_modules/@emailjs/browser/cjs/index.js","4b34a1dff5cdde7a2f1505e909dad78c"],["node_modules/@emailjs/browser/cjs/methods/init/init.js","b8c6410eaaef85dcf0a930cb4ed6fd44"],["node_modules/@emailjs/browser/cjs/methods/send/send.js","f0686154ff4131aebe2b1454bccba8f9"],["node_modules/@emailjs/browser/cjs/methods/sendForm/sendForm.js","94ae89bac63db0725c00e492996711d8"],["node_modules/@emailjs/browser/cjs/models/EmailJSResponseStatus.js","2bc4c723180e5b214c0b8178ad6476d9"],["node_modules/@emailjs/browser/cjs/store/store.js","df70482dd3d54ab135c8cd9612e74f61"],["node_modules/@emailjs/browser/cjs/utils/validateParams.js","dd510f644b70702d9ef8206d72557d1b"],["node_modules/@emailjs/browser/dist/email.js","396e978310d31efa4fdefc50f7fce6e3"],["node_modules/@emailjs/browser/dist/email.min.js","0dbdb7d23250c982a7ffd38bcb0fa0da"],["node_modules/@emailjs/browser/es/api/sendPost.d.ts","b2836fbf986d0582dec9863eb2d6cc52"],["node_modules/@emailjs/browser/es/api/sendPost.js","7988b67cdab8c690ca63cbe55bf725aa"],["node_modules/@emailjs/browser/es/index.d.ts","d46f6149455103607db3c98474a6e2d4"],["node_modules/@emailjs/browser/es/index.js","5787e7f3cc1b169cb2d75a6de5effebb"],["node_modules/@emailjs/browser/es/methods/init/init.d.ts","f53e10e84caf15218ef65a520fbd8f49"],["node_modules/@emailjs/browser/es/methods/init/init.js","f1c17b1c94bc84e30076c5903b3aaa14"],["node_modules/@emailjs/browser/es/methods/send/send.d.ts","e81617588c67c1011035d8400b210773"],["node_modules/@emailjs/browser/es/methods/send/send.js","ddbd6707fea863c39a1e1d60f2d473b3"],["node_modules/@emailjs/browser/es/methods/sendForm/sendForm.d.ts","673eb9095bc2c20b5da389d81c0c9a19"],["node_modules/@emailjs/browser/es/methods/sendForm/sendForm.js","e475c352c71b57188fe15aa49b3eb0d8"],["node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.d.ts","5b3cfa513436e220d97ee641737c94c0"],["node_modules/@emailjs/browser/es/models/EmailJSResponseStatus.js","fda844f4172adc19878e8d5ad53a890b"],["node_modules/@emailjs/browser/es/store/store.d.ts","9a727dd948d7ea726b17433c2a506275"],["node_modules/@emailjs/browser/es/store/store.js","12f35a4bced888bcddc923a0c26bf8de"],["node_modules/@emailjs/browser/es/utils/validateParams.d.ts","9f9fb28abe0bde562a0b08afae7e086c"],["node_modules/@emailjs/browser/es/utils/validateParams.js","341e5bab066c705a3603292abeb81ee0"],["node_modules/@emailjs/browser/package.json","d315396d96ff4ba247818a00e6280792"],["node_modules/claymorphism-css/README.md","b914aeb8d33d3e789ab2351b3003d584"],["node_modules/claymorphism-css/dist/clay.css","be9a0e320d4708a8b742ede7f7a0dc46"],["node_modules/claymorphism-css/dist/clay.css.map","5d60db5a2528763d62f424e5737dfe51"],["node_modules/claymorphism-css/dist/clay.scss","40147429d62ade4c3dddada287476201"],["node_modules/claymorphism-css/package.json","4ae16b9a8499777cca29d33f2a34e4e8"],["node_modules/emailjs-com/README.md","8bc2f6fca03435ff5bb863fe38b406b8"],["node_modules/emailjs-com/cjs/api/sendPost.js","e72adc9185a3e6d476d80e0c2ec01d59"],["node_modules/emailjs-com/cjs/index.js","4b34a1dff5cdde7a2f1505e909dad78c"],["node_modules/emailjs-com/cjs/methods/init/init.js","339d7d8f23637caf9f414040613b40c2"],["node_modules/emailjs-com/cjs/methods/send/send.js","041961ce3feb1018fa09658b7f6e489c"],["node_modules/emailjs-com/cjs/methods/sendForm/sendForm.js","725e6d484019129dc8aa8a0e9b54630e"],["node_modules/emailjs-com/cjs/models/EmailJSResponseStatus.js","2bc4c723180e5b214c0b8178ad6476d9"],["node_modules/emailjs-com/cjs/store/store.js","df70482dd3d54ab135c8cd9612e74f61"],["node_modules/emailjs-com/cjs/utils/validateParams.js","39d66de96908ef2ddfdd8b145c4b3d15"],["node_modules/emailjs-com/dist/email.js","2836cfa4bdcbc54c7de72660287b0376"],["node_modules/emailjs-com/dist/email.min.js","53ddfd251c7aafb11e1108b4513af583"],["node_modules/emailjs-com/es/api/sendPost.d.ts","b2836fbf986d0582dec9863eb2d6cc52"],["node_modules/emailjs-com/es/api/sendPost.js","7988b67cdab8c690ca63cbe55bf725aa"],["node_modules/emailjs-com/es/index.d.ts","a1686df35ba4969a859acd86bda655b9"],["node_modules/emailjs-com/es/index.js","5787e7f3cc1b169cb2d75a6de5effebb"],["node_modules/emailjs-com/es/methods/init/init.d.ts","105727904ca3d45b9479e2bb48f04a3b"],["node_modules/emailjs-com/es/methods/init/init.js","d2d482bc43d9872c2b3c5d7085a80969"],["node_modules/emailjs-com/es/methods/send/send.d.ts","1ff84caf6e17ac8e76f7353f9aa910aa"],["node_modules/emailjs-com/es/methods/send/send.js","c2337b8932308657948636b24312cc4c"],["node_modules/emailjs-com/es/methods/sendForm/sendForm.d.ts","1f62b91ce2f6728ace757648de0229de"],["node_modules/emailjs-com/es/methods/sendForm/sendForm.js","3041221a63e824ec590f8f94d8bdc28c"],["node_modules/emailjs-com/es/models/EmailJSResponseStatus.d.ts","5b3cfa513436e220d97ee641737c94c0"],["node_modules/emailjs-com/es/models/EmailJSResponseStatus.js","fda844f4172adc19878e8d5ad53a890b"],["node_modules/emailjs-com/es/store/store.d.ts","9a727dd948d7ea726b17433c2a506275"],["node_modules/emailjs-com/es/store/store.js","12f35a4bced888bcddc923a0c26bf8de"],["node_modules/emailjs-com/es/utils/validateParams.d.ts","e15dfbd45d0ccf7d68591e767495f0d9"],["node_modules/emailjs-com/es/utils/validateParams.js","cb3f23248fa0843d4ff7454a7cee5245"],["node_modules/emailjs-com/package.json","f3da35bdb3b24cf36069c0695c972e23"],["package-lock.json","3eaee037b7c03911678aa69740bfad33"],["package.json","d6013cfaf1b39e528a7f63301e183bf0"]];
var cacheName = 'sw-precache-v3-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







