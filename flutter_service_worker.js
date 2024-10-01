'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "5661cbd8cbb66eb80c4c7da636202b13",
".git/config": "1edee4cd9064f84cbbb5314ee2e33972",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "77c6b3fe4fefc14a7e3b592a7e286ae9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a81440f800987569f8097ca90d79d17b",
".git/logs/refs/heads/main": "a81440f800987569f8097ca90d79d17b",
".git/logs/refs/remotes/origin/main": "7dcd96bb487da08aef4830fdaf6701f9",
".git/objects/01/773a25fe0717e9fc3d5d40eb4bb0760480cb5d": "5152b38de605000ab801b1cea323dc78",
".git/objects/02/daf522c82f5d14a8feabcf8eb890a637921b7f": "ac13c8e2a6b5006ad7a69b49f2efa238",
".git/objects/03/0aa929f3ca5a0fe42df628a94b413fc6dd8373": "ed530202bd3cc14d92f081a67e19deb4",
".git/objects/05/319d10d0b60afacb39d40019bb3c0f6aadc317": "603e98dba0186cdb14be59513f56e9e8",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0b/a629f93c79ed22fcd913d5d005ad69c1dcd211": "ef156c7eb8acae675b6901d40beb1268",
".git/objects/0c/23f81674e8d5e4ea351768ebfc289eb32f3856": "ca0d0e6af396ad4d1d06d303e2e76b3a",
".git/objects/0d/96b2f0bc7933d72bd05793f1abd8bc8ed6a45c": "3ac4a484781029e57080244a9b8f0f1d",
".git/objects/0d/99de1e6dc01de3db7cd2e2b4e3594b278e5e45": "50e597534aa0da5e0770f2fcd589504d",
".git/objects/0e/082c5e7fb1410a40b5c94d10be93373356f135": "c2c0ccb1ff6f80e4b5f46d509eb08f2a",
".git/objects/16/c952906a0192c7336011f17635437e7ad32df9": "727ee424b26adf41097797b20c949f49",
".git/objects/19/578ab5124f98f70b0ee9e7de9db5d1ec86a758": "4e9444622cc4c9a2ebb1f449722c0ac7",
".git/objects/1a/2bc915d7b748300e0f7777417ee6e3b794ad87": "642b5a75ee38773dfbdf5cb2d6f98763",
".git/objects/1b/3583cab9749f9482c248e849c3fc3b107adc19": "72c5ae299b27257bd56bb72edba100f0",
".git/objects/1e/b7b343cdff0238e82ab6fbc27fbd492a2106d1": "317e05a51a4ae2311320242cab08af45",
".git/objects/20/7f9df1b5a28b95462966057d7b0649e9f0aeb9": "c82e51a550958a422331dc6b049c7d95",
".git/objects/21/05e9e8607523453f6f76e0e291f12bcb1a13b0": "b375fbbd0121d897fa0f9ee1e6ba1c01",
".git/objects/21/58d89193e1bae32565fdab680a10ee637461b6": "9d68ea4b23c93c0f6d19ba2f9e743470",
".git/objects/22/8f0e7f6e8d65c9d9617bfc19b2556d4a92bf0a": "55e9ab087be4b4143c88d971dad5bc31",
".git/objects/25/41b9f0022a827ce0b3f7816246ceb88c6bf64b": "b733e5461b0edc438249896110ab05dc",
".git/objects/27/25e82376a1cc902bfe890dabdd6114c31f141a": "7f9fcd3f4de0fdb8b1490fd0c51b3816",
".git/objects/27/8bb1057877c12fe7417acc9ec9f882e945ba56": "604fbbd710f445c236abdd19a30553d4",
".git/objects/29/459fc0f2abd323284e6608452053ff43398624": "b18febeb69d0921ce1018f7f110c1185",
".git/objects/2a/b6edee0670660e981d41b8b7acc72a6694ccd2": "0baedf6c1d42edd49a1fdd2bf270ba0e",
".git/objects/2b/8b4141a995373cb395660f40e5739d072c3e45": "c16ef64190ef1ed70c668dbbea827c1d",
".git/objects/2c/eac67490f8feb05ee7f65501c44077bf8ecfe8": "54962435cd8312520e912f1a6baa5f31",
".git/objects/2d/85bd8e888221963ff5779934a229dd2aead98f": "04c8cd6246fe820961f96b75555a46fa",
".git/objects/2f/5e7123d1fc3044fcf58550d2a4fa0a7bc0eee6": "8e5d85797e02ee3b778bbc730ae86b5e",
".git/objects/2f/9e15b3713a2491acf8071c04b633fd59fc1795": "67b853e3a82a81ab1ff25cce2b5d824b",
".git/objects/2f/debd8e85db3d0c47ce7854c2b8ea5677cc502a": "89a8de946f52762d33fc29457c33d627",
".git/objects/31/b616480c09f077d06348208eba433cc4eadbd5": "8731942faa73230bc690f17c8b7868c1",
".git/objects/35/cf971c532f6548beb437ea7766155f969d3581": "e8bc7ecf0467c3d9e93533c4336263e9",
".git/objects/37/1d020f6214443abf8e4a42be3501c0c00d6e98": "f5eda2e8fac3b36254d8f360936d2998",
".git/objects/38/9e9d4f75f40d46301212b0eaeb1f82337a9f19": "8868b6e204895169408cd3918c3b1a28",
".git/objects/39/cbbba3f9a0fa092261200b0c8a2190bda3a6c3": "32c551e1ea7cee2e66f12a78097f01b6",
".git/objects/3a/0bb960b2cea1f3d7671569481d51565cee40d0": "a1fc4c5f0ca9a7b2153258b5660605e3",
".git/objects/3a/139415860100d980ee1c4d7aa6965f5845a8e3": "19992ed075365651dcac7b9863cf37de",
".git/objects/3b/5e7efffa942410e5a86ab22384e9d2eeaab698": "8d693ea51a3f3a6503e7690f6b7db9d5",
".git/objects/3c/df65582ea4a442949b323849972fe1b52505db": "2ceca0e4bf907ddd1671ac286a1c7aaf",
".git/objects/3e/58b9a38ea8ec36f7dbd4397bcfb6a314048e54": "0395b9d4032c3ab84050bec4e23ad088",
".git/objects/42/a47ace8659bd96e0bd8a47636df94b340cbc55": "8eec67b67d473287d78b77fb92824213",
".git/objects/43/b21123596aefbf6a20c1093d9a60eb12f7a5f3": "ae9f34d2fbdb23e1f2b538979298cf2b",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/0704ebe5c787cdcc2c8699659a8f0879bf717f": "b05329b08288836fc25ea90c98f6fe46",
".git/objects/46/ea7ac6f7591337da476d7a90ed1c1b18a22b01": "dfa0cd0b249c0bb4d8fab8d946534937",
".git/objects/47/7aa650ba74676738655760d4c50dd4c9267d91": "6010d7297479939f24ac93257a1ace06",
".git/objects/47/8dc38d0dda23c4073f16866f1ac08a5c13c613": "88fdb83eaee8537dc56a3604e24dc468",
".git/objects/47/dd2a9b9e44077f3f55279f3b29e501483776d1": "aa83118b5d3fd64c6576751f631ada78",
".git/objects/48/636dfeb69336cee3455492910f7b7f307f602b": "6a0ba116caa4e5916d29f0d7665f7267",
".git/objects/4a/bd6d63121efaee881aee2a5e7f02a47096334e": "ccc136090913d24de8b93633929b5dad",
".git/objects/4d/643aa895ff101466670d125b05acc99ea0afc1": "a63092339d84e580e03f870b374d80b7",
".git/objects/4e/1830c1cde35859da80aa2dac44981af5c3acf9": "a88922a2787033d9f366526e5f025ad3",
".git/objects/4f/f3f93c413650af0f19456528262bc7a21f7234": "a482921d5444e7e864eef0ebed66884a",
".git/objects/51/a77e4df9d4b2fc71fec5f7a940f510602575e7": "b5a1e5b62552273809fd7bc6cc6fac8b",
".git/objects/52/687322fcaba94e0b6506bcf14d0289f46399a9": "4567825b4c26c636e08033cf80b14720",
".git/objects/52/cb9c5cf606860a7a941b8013d737bb4779a2b3": "d9ffa82f897e0b1f14ef81b2543e828d",
".git/objects/53/c5c2bd9d5fde6c786bd3c6dfb83f90b9217a9d": "43154f54c688340d78f43fd36dae8436",
".git/objects/54/d225c32b8500b6e18a50f95a9794f7592bbc78": "83861668cc21e5d8455534c5a8f84f4c",
".git/objects/54/f5201b32f9cf86a2e363d734d8c86cbc7cec83": "1be36791191b4f35bb0019244d74f24b",
".git/objects/56/6f7e98ced3ab0f6bbddce871429b9ebaf03cbc": "b950ba32c279b052aa2cf8de02818617",
".git/objects/57/7637f537081cf83a7b9b8e6e873177ed937f8c": "84952f0b32156fc57ec4fab01243ea17",
".git/objects/57/bc572dacfc0cd67edf4a5144fc0f147ca68b0e": "05155e9275b7d070cf36966039145ad2",
".git/objects/59/ece1288af36d4bf337e07e72c6eaf750191e9d": "ecb478e870d7d36e188f3f9433ac52e5",
".git/objects/5c/6b2bdf26d9020cfc6adbf60d6aeb8d21ffaad8": "2568e2ba2d68c8d48fd2d6debe30483a",
".git/objects/5d/20f8dbfd89fdb92141946e3da2ac252e4799c6": "48a922eacfcd1542c695610f15238f17",
".git/objects/5d/3b32370b4d60eea6b593ea5ec6a336b6964380": "4a4c5b590bd2cf63b1ed4fc91d6d5e7f",
".git/objects/5d/7a3cc1df61cb6f79993c0870bf35a85e9ecde7": "55e3228d76a572292840060d7a84fa5e",
".git/objects/5d/9e55b4a2f9176568d113a2cfa651d206ed9f36": "77f94a0c5a85b8f9539afea3910084d7",
".git/objects/5e/3c3e53e1f1048b5989ab886bec46f064910b3c": "02296931bd481b9910027037d65b7623",
".git/objects/68/893addaa6c3eeeb09f76f7d9c2796dcaa57a2c": "4cc2558c9e12addcb402656321450f48",
".git/objects/69/37ce0a643f75177b0106ad0114a3e5b013500f": "9319490c7bb9085b6a4e123da92b8f1d",
".git/objects/69/4812e1dd507dea6b0eaedff3662df2270e954d": "ed8685c5dbe9521587699ce2c2e6db0a",
".git/objects/69/d284a69bf322a6f4c6be89f58bffd9d45ea63f": "ae7f75b039f624fdfdd8c48dbae2bd6f",
".git/objects/69/e64a158f8d5491f2542060207847f8de6d488e": "f3f70ebbd75dc8bdc44de76ebfb33b55",
".git/objects/6b/2c8048ec5348fa466da90802773ee65940ed58": "8d8072e9a64ce7f87a2858777177620e",
".git/objects/6b/4b76bf0f6599f1c5936b00169811b339a3cd3a": "c93d9ad0a4fd84b5e892e2ee8a1db4d8",
".git/objects/6c/8cf09b6100b8c415423efcfa7332c94067b565": "33ab1c285e5d3aedb8ad57466b9310e7",
".git/objects/6d/da802a11b2587a7276b186c8dc0576754ef706": "9d1b4b53d0845f668a04c8bcd4d69bd3",
".git/objects/72/60132a6fe8c0e1817e0a8567e296fac8dea15b": "79108235af1b95e2bc1b8afc23e33371",
".git/objects/72/88aadb3fdfe23b5b28e9e50d7cebc1e8460ae4": "93d82397a9ce007b5b03ead012b9a6d2",
".git/objects/74/0d0b0806304ae58386c6a226b656115265015f": "17b115a3efca1deac9198fa7f5805925",
".git/objects/76/de2735b71c6a25ae8891c4129dc16e1cee578c": "77badac8a28ba523bba7308f313f3eed",
".git/objects/77/6a08056f30fc6e1935eb84bddda9ce234a2f24": "24c708512947eae1d1b74305bb548c55",
".git/objects/77/fec61d47f88f12b61ef865b8ac4466c014dccf": "cf53a67ca4f0622b7adff1df59dfd6fc",
".git/objects/78/eff0ddade986c484aa9f947e0fae3dcf4bb202": "7427829bd4f68c9ea581779264f548c9",
".git/objects/7c/84bfd8379ca18d400fee3277656a37475fb216": "4078de1da4148ebc06c413f5b10e2736",
".git/objects/84/250d8846dab4f64a077e05818ffc80d772bfee": "5078a0be35852253005f6e4cc71802d1",
".git/objects/84/85221c7f4127e61ce3852d4af2cfd6a8810291": "26088513ad68a765bcac9c08a8e57dc6",
".git/objects/85/d939c4705aec058965ce7d2a524e706e399091": "ce60a76ac5692aa88dae22a59db3883e",
".git/objects/87/18b6ea0510706f9dcf4ea03b9ecf7c91dd9900": "064e0dd824263d6723d8c22464080c31",
".git/objects/87/4407f87bbc632543dc2da95ba09ef0ba81a092": "ab7106c587482e3ccea472bd6c8877bc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/b20bf16b778ae2a53f30f0364285adba41a4b0": "9556f26808c7ef89101179e397152ba6",
".git/objects/8a/8fd7ce0249723401ccad3859e29a0cb8071a85": "cf0711b11b9a5f846b03079ae73464f8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/25423a9b5e6e536c502abf33598301c1ec080f": "ef620f96ac52307d404bfa2d058e866a",
".git/objects/8c/5dfda4d1e2e9f6488649e294d24c0769e3d3c8": "589ff688ae2778e1b17cfb679d408a64",
".git/objects/8d/76f1cc494759906744c3a0fbb9313e126ffab1": "704f56e49d4859d152407d9068906ff1",
".git/objects/96/3915135a55d940d6e70bbabc2ec9d7e6df7272": "6f04aef378ec8ba0e5ad901d2373f59b",
".git/objects/96/5d1eb81e4fc925882c0d81b1eca7c3fcf0773d": "ccff7dc71a3f3ef26956da64ee909143",
".git/objects/99/161a1053e9ce47351659eaf0f2d659bec9063f": "4e83a99c7db066dd7d6eb3cc5faa8825",
".git/objects/99/61735d5c7c044432071cf148dec8f99330b9b1": "52169c2f72a1e2874ad1412848ce8820",
".git/objects/99/ef7ba31b0bf4f51d7e1733c276d9349dc01915": "923c65351b25d3b528e9072118661bef",
".git/objects/9a/3337e7b39a41858ed66c9cd10ed8d6fdc0aab2": "baa617514376aa7c0f7d6ebc2635488f",
".git/objects/9a/3b4ca7a40100cd34a72fb70a10145553dd0b36": "b57d5045349176dc12d054851bb5e2d9",
".git/objects/9a/dcec10404dcd45cbb5b8095c2f8b4beb3bbd6f": "cf8f013ca0d02b063db0f700ce5f2cea",
".git/objects/9c/18fa3883fb87b5f3f49f4022878cd4c6f4921d": "6f92f438b8f4ca3737a216248e20dfcb",
".git/objects/9c/95de1f547e5d5f38dfee0a7206945a170c4f94": "3083dbaeaa4552b3120cd5208edf4ae1",
".git/objects/9d/d489aa0d3f5f6d3c6dbc6f5dfb333d9e2e8bf2": "9c46a7c6fa1dce2564b78e7f61130433",
".git/objects/9f/4d9d7b88adf0fcda43083f2fb887566f2fde14": "3af88385b9577f6a23cb994139993c2a",
".git/objects/a0/d3fa5574a65ad7309a476c2cbc00050a2459a3": "fcc3b9adff958c530feadc9f15f93101",
".git/objects/a3/a033c6408c3cc4b462f4709000c55461906108": "d5581d5442a37212829b49c0335334a9",
".git/objects/a4/d35ec39f7b5789d73d14115ae4426696e0ad7e": "f72a3b8361e8691985764abd448d0211",
".git/objects/a5/96a3045038a44af22d4346662da178e052a6df": "757006c0067ab9d4db6e734bfa69ead5",
".git/objects/a7/6be0f8697693ca5a69697175ed7ddd06deed71": "7e1a9611e1ea83b26a335fafc2178c9c",
".git/objects/a9/2f16fbd411908ed8f81e93e844c0902538c717": "39c10ef9c5f456be69b16da444f272df",
".git/objects/aa/8a43a9033778fca15f9b8fe3eec6b7ddf73d7b": "08894d2fd8ce098997f43a670632c78c",
".git/objects/ad/880579da69a2a7edd9a8c43b6b13996205e3d9": "ae2d98ffdb4c7c1c5c5931de7d72cc5e",
".git/objects/af/b05818f5eec0aedeb7e104284df11b03251857": "097dbace6c81b7ad759fd601738845e1",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b2/33e6d94be942af89f5635b82d6ad92fb3d775d": "f565432c792d1ec6817649e6051a9dfe",
".git/objects/b3/1aa7f8b5fac2354c5a964846ae33ad4407fe18": "005ddda4e37dd7f20b7d6d35a53e2c3e",
".git/objects/b4/0f19ffaf481d04136558f92764b12320606d32": "5634b936b17e6721a588dffd3075f666",
".git/objects/b4/f3804579081920093c7ac443f07c1cc4b8c3ed": "70a3b1ca3b4a5a427da5e1ddb9e6d219",
".git/objects/b5/14c1c10283b4dfbb6b078dd5f679c1c547cd66": "a761d4cc69299cf526e5c3f774ae092a",
".git/objects/b5/7eb1320cce7bfd4b5e00674a3c1b0ee110c5c2": "d09f22512493f508c1e1bc7befc9ea63",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/ea28a8afdabcef37cee6bdc1ebb027b4d83521": "582bed8464426634fafcae7d8089e55b",
".git/objects/b9/019baa9b4197602dcb26b6c41f88175e94ae7c": "2fa820eb09f60fa37e790df67dd28679",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/394f3feb4ceeabc83eb7c8f7b3ffbb4e091d5b": "56524ec37adcff6eb08240e46b44e7af",
".git/objects/bb/8bad3a184e1b343a3d3a2d670f00f9bf86202e": "cf9ffb3a82256031cbd86993bdc0a2a8",
".git/objects/bb/fb4cdbb51556f53fb30244915124dbd9c2e12b": "98a106bf92f063e36e59efdf83d5e264",
".git/objects/bc/331dc360f990ccb9e8b1f020c8b94febc02ed3": "f70c14ba98a7276229a52e487ba37394",
".git/objects/bc/b76eb0751adb49d76d8fe28efdd9ede3f7dc74": "c4b78f5403d4abfafea0ab34157a8891",
".git/objects/bc/f403466c351904f466743a8831eb67ddf0aa74": "2a66b05c8b5bea0c26593ffae1082b88",
".git/objects/be/5c7c4c2f766bae80c3d70538464437fe19aca5": "a46452f00facae066818c4f0bdf86717",
".git/objects/be/6e837cf45907c5de55497b69c174f05ef99ca8": "5561bb02e9e457e2a0a7c27467ff4b54",
".git/objects/c3/d3a7c671e54dacc25839ed71a4b827c5ff1257": "b522a000a63d38316d85438f7f27bf24",
".git/objects/c3/ddfabe2697cc451c5efa4b668bc2f788c9d550": "546acd1c70afb3609d2f540b15da37e1",
".git/objects/c5/3400df89a4a54fd9839e936bc7cbc941aa98ff": "a2fa2d66cfa98684f5396b6aceed3d59",
".git/objects/c8/9d5c7b2ac00d33ddec932390475d5781b4cc05": "ad070fd56269b7453a154ce2964803e3",
".git/objects/cb/aaaa25f1b52f57a2a1181b7b62086310fef58c": "47019a0c6b891e0bfd29627eed2633f4",
".git/objects/cc/36804cc13af2c78d73c8a955bad13fc7ba661b": "8d7c0afe4d9c3d7c57d159453de2dcaf",
".git/objects/cd/10d13cdb34d515ed7b3d2358ce15d546b0ae8f": "7bc345cb930124be4b5e6545b62a8286",
".git/objects/ce/382ef0d8578cad2f226809f66573c46ccf84f5": "153998e2fc3c26dd8bccf49ec25fe068",
".git/objects/ce/5427186329529e140706eed4746d4e8feb5d8f": "25c1f85c14c3ff415a7164068736ba9e",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d0/4f02e1f13f6b90bd5d2c88d5695b5e53e1acb2": "1a305c13e33f2b5e2e24561fde92c1e7",
".git/objects/d2/2c69ffc30387801f595116e6e617c4e0150564": "f9202490edfeaecc45502671be8e5558",
".git/objects/d2/80055514388bbd03d78d55860226db9df318a3": "42df508cf83df08d3ea590031c4e6e38",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/4743ae106873ae3fb20663403214d6af1beb41": "c6d99a0c11f024e56aa3048fa9506ebc",
".git/objects/d6/813db9df3c1f54e95301719d954a167fd0ac50": "7beb627c730dd12c31df3a112e8a9e01",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/82ef27791e554323cdd323f4a2a677f9ec7e0d": "a5adf2ab9cb739ce58fb7cf812a093f4",
".git/objects/d8/8a31f180497116ee9bd4891336559ec9a957e9": "fed070c81985df57e4cea1712220c4fc",
".git/objects/d9/da3fd2d29bee7e0ec794eed448bde3bde20fe8": "ed310b1af04f0c79482b60c448199e6c",
".git/objects/da/327b28bcccac54a806228a9b7c1857810a5bd2": "843777b6e06e03fb489f230185e7113b",
".git/objects/da/9b953ff46cebbd0ae4e3f3ab6fd9c1420bfc46": "956d739fe95a8fa2fb15c3cdb072d046",
".git/objects/dc/6d0481b8f984d9aa69bf8daf41eb91d7f383b9": "9c9d64c5b41a55d3137be1eafdf48412",
".git/objects/dd/f4bfacb396e97546364ccfeeb9c31dfaea4c25": "049d11285bcbd30a249b4dff756126a0",
".git/objects/e8/29f6f3275b68f972d186eee233d37f16f40436": "759fe6446654701850ebbff4ab5a2b8c",
".git/objects/e8/ab2aac6ff66fdfd4be1cb352db4a7554546453": "5f2971d0172e41f176b3fdd0dc88441c",
".git/objects/e9/0c7284f64260ae3fecb7475731bdaf023d2e12": "aa5aeeb987e72b622ba321770d40f5e5",
".git/objects/ea/4c60d65e14a4970f736d06048a30a67f4f5797": "df7d7509481732b334d13b96be2ab04d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/1794d66f64687b10deb7b6528854bca415f107": "7d209b974f2e0d0bea96b3fabf71191b",
".git/objects/ed/23ccefee1ffb983f36ac318b1c04b40875f5d3": "d5afc54db0444948b8ba51d508ab7061",
".git/objects/f1/dcdb3d6e6704be0786e3524fc33e3be948a254": "5f4f42dd298a0e20689a81bdea08cf70",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/0d26284e92abcd0a1fb479c5434c9f6e4c3eea": "85e387efb4be3c8c433ee7801e2ae10b",
".git/objects/f4/4bf66c7a8538e0842344cf0f8d8cbea6fc9089": "d8112821ed9c7b34238b514c5c1bb85f",
".git/objects/f5/92c2d98d84a57eb313221dd4200f071cb7751e": "997ab014054aefad9f5963b5d88af7cf",
".git/objects/f6/098d9742400caec3a73139a7efc39b8c7d30a4": "8759b8e5cba2f4b22911d39eb6ed0b8c",
".git/objects/f6/6f543f78d8b8a068b8efb6116bd6101e077591": "aa7b79e9a3bf353ad6256d82a5f8a3f4",
".git/objects/f9/5d37befcbe648ac3a5431fc7012e357fecf9ad": "c0dab2f5bb3ae92b98f8be2da0102969",
".git/objects/fb/46874b6d5cf768e939d6229df55f60c794631e": "3f396754ba07053edc7eac6beacf5d08",
".git/objects/fd/487d84dc01d42e47d6d5fd6db324c183e8e2e5": "e55b205fbf2cf1c1679108b4953a3d80",
".git/objects/fd/588e6cbdef7ce17414ad682b3fb2922cd41ef7": "dcef0f26feb5b26609d54fb2f26fd33c",
".git/objects/fd/a11c2bcf19e6cadae9fe26b5eb4d2d0e6a57f9": "d1220c9139def1427e1be81cb32049d9",
".git/objects/ff/691ba786c002b3a9fb077996f3fc27576170bf": "dca1c0f63fdf8981a83a05416d3817cd",
".git/objects/ff/9014a2ce874d018820a0987fffbe1eb470f108": "67463a2e2689201171beab03c30c4ac3",
".git/objects/ff/c472fbd24d4e6abd2da374adf7557bb26f937e": "e369639eb5532ccac73ee59c68254dc3",
".git/refs/heads/main": "ded7f604176711dc4dbd1d6ed5137c37",
".git/refs/remotes/origin/main": "ded7f604176711dc4dbd1d6ed5137c37",
"assets/AssetManifest.bin": "74c28715d660f32c205a6a1e466f828d",
"assets/AssetManifest.bin.json": "845276f0e595f9c2c49a7d07417f33d4",
"assets/AssetManifest.json": "1013695cd6842c326f7cd6ee695eb046",
"assets/assets/images/4XiD3t4qBbyp9Jnflciz.png": "53eea383b817181c3cff0b229e213209",
"assets/assets/images/banner-new.jpg": "8bfadc3d6cccd649a6ead90fbfbd61b4",
"assets/assets/images/banner.jpg": "8c59e0afeeccfe785c7f415719bc4603",
"assets/assets/images/EK91app8gPSN67wBnsB6.png": "a13211fe0e5d43808d338f61e78dc72c",
"assets/assets/images/icon-01.png": "2139df392c01dcf5768128edab0abef6",
"assets/assets/images/iFZOVktutOW8PIqKHzqk.png": "804c4d114c5d67b4ed77ccaef45d486e",
"assets/assets/images/workshop1.png": "0347ff99e24c2bef5132fd964062026c",
"assets/assets/images/workshop2.png": "d36077048964075225cb96631d29cd06",
"assets/assets/images/XmcldVxwx06LYwfIy8cz.png": "ab588940d0441de3bda7ac7992d5e3f9",
"assets/FontManifest.json": "0609a677a49987c668608ea0a47206f1",
"assets/fonts/MaterialIcons-Regular.otf": "1eb232720c20b5fba442b654a2cb0fdf",
"assets/images/4XiD3t4qBbyp9Jnflciz.png": "53eea383b817181c3cff0b229e213209",
"assets/images/banner-new.jpg": "8bfadc3d6cccd649a6ead90fbfbd61b4",
"assets/images/banner.jpg": "8c59e0afeeccfe785c7f415719bc4603",
"assets/images/EK91app8gPSN67wBnsB6.png": "a13211fe0e5d43808d338f61e78dc72c",
"assets/images/icon-01.png": "2139df392c01dcf5768128edab0abef6",
"assets/images/iFZOVktutOW8PIqKHzqk.png": "804c4d114c5d67b4ed77ccaef45d486e",
"assets/images/workshop1.png": "0347ff99e24c2bef5132fd964062026c",
"assets/images/workshop2.png": "d36077048964075225cb96631d29cd06",
"assets/images/XmcldVxwx06LYwfIy8cz.png": "ab588940d0441de3bda7ac7992d5e3f9",
"assets/NOTICES": "df10ea1a392e2421e8b53146c7e11369",
"assets/packages/widget_toolkit/assets/fonts/Roboto/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/packages/widget_toolkit/icons/add-disabled.svg": "a79969f7676361fe5fb836d69b8b0a48",
"assets/packages/widget_toolkit/icons/add.svg": "c43da96c40ebbee21131d27d897df870",
"assets/packages/widget_toolkit/icons/arrow-left.svg": "ccdf377f3bc421ab853345cc68b8ed65",
"assets/packages/widget_toolkit/icons/arrow-right-square.svg": "a8071d94e7df80d23b508a04ff23e955",
"assets/packages/widget_toolkit/icons/camera.svg": "fe24322278ae0b1d7cb6a5f0ad4fc747",
"assets/packages/widget_toolkit/icons/check.svg": "6cfdc18af9d26aaa56adc9b2d8a920bc",
"assets/packages/widget_toolkit/icons/check_circle.svg": "6d6131735d725f00b5c6f90f21c22f4b",
"assets/packages/widget_toolkit/icons/close-qr-scanner.svg": "535b5a058f8bfe977f00933374d43cad",
"assets/packages/widget_toolkit/icons/close.svg": "753bd8af9104d2e87ac186d6a606b50b",
"assets/packages/widget_toolkit/icons/danger.svg": "fbd79912523011f191490727e24c273a",
"assets/packages/widget_toolkit/icons/edit-pen.svg": "eaf5b3e4a31394c82fd4d17cb1d8fafb",
"assets/packages/widget_toolkit/icons/educate.svg": "7e8fe355d5e5d64b475e97bff031aecc",
"assets/packages/widget_toolkit/icons/great_news.svg": "b04ba199fe092294a1319717c291d580",
"assets/packages/widget_toolkit/icons/info-circle.svg": "3d1208d5a5a61c02645a04620411834f",
"assets/packages/widget_toolkit/icons/loading.svg": "37a4c2b321680a3c4b8928919430f347",
"assets/packages/widget_toolkit/icons/message.svg": "3214c4eb21adbe621043059fb1edb545",
"assets/packages/widget_toolkit/icons/qr-scan-area.svg": "5219720faf108d4d3694c4f6b5c3e0f8",
"assets/packages/widget_toolkit/icons/tick-circle-success.svg": "6d6131735d725f00b5c6f90f21c22f4b",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "9a39ab8aa3d828142935da9efe99b3a2",
"canvaskit/canvaskit.wasm": "afdcccf150b5cba228e27c813548b842",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "43ec75ce562f82c5dc5be1a738d87e37",
"canvaskit/chromium/canvaskit.wasm": "3909da2fbccad1a2e4a1f42750d24977",
"canvaskit/skwasm.js": "e95d3c5713624a52bf0509ccb24a6124",
"canvaskit/skwasm.js.symbols": "0b8baeff2b4484d2d6be67a7e082f9db",
"canvaskit/skwasm.wasm": "ee4afa1790abb925360fd9519c5194f7",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "86987653404fc489a1596309587614c6",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2d91c7ef407eca44c58d9eeb458918c9",
"/": "2d91c7ef407eca44c58d9eeb458918c9",
"main.dart.js": "39c0fc1a485582d156fffdf77ddb45b3",
"manifest.json": "f5f7007e58fb5afb1c90a227efcbdfd5",
"version.json": "33326113603c0c954b00fd27f37ca418"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
