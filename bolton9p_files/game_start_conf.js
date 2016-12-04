function getHouseCardsString(house_name, image_file_array) {
  var rt = '';
  var html_array = image_file_array.map(function(image_file){
    return '<img src="bolton9p_files/cards_bolton9p_files/' + house_name + '/' + image_file + '" width="23%"/>';
  });
  //console.log(html_array);
  rt = html_array.join('\n');

  return rt;
}

arryn_cards = getHouseCardsString('arryn',[
  'bronzeyohn.jpg',
  'harrold.jpg',
  'nestor.jpg',
  'lyn.jpg',
  'littlefinger.jpg',
  'robin.jpg',
  'colemon.jpg'
]);

baratheon_cards = getHouseCardsString('baratheon',[
  'stannis.jpg',
  'davos.jpg',
  'melisandre.jpg',
  'florent.jpg',
  'salladhor.jpg',
  'florent2.jpg',
  'cressen.jpg'
]);

bolton_cards =  getHouseCardsString('bolton',[
  'roose.jpg',
  'ramsay.jpg',
  'harald.jpg',
  'vargo.jpg',
  'nage.jpg',
  'wolkan.jpg',
  'reek.jpg'
]);

greyjoy_cards = getHouseCardsString('greyjoy',[
  'euron.jpg',
  'victarion.jpg',
  'yara.jpg',
  'cleftjaw.jpg',
  'theon.jpg',
  'balon.jpg',
  'damphair.jpg'
]);

lannister_cards = getHouseCardsString('lannister',[
  'tywin.jpg',
  'mountain.jpg',
  'jaime.jpg',
  'hound.jpg',
  'joffrey.jpg',
  'tyrion.jpg',
  'cersei.jpg'
]);

martell_cards = getHouseCardsString('martell',[
  'oberyn.jpg',
  'hotah.jpg',
  'obara.jpg',
  'tyene.jpg',
  'nymeria.jpg',
  'arianne.jpg',
  'doran.jpg'
]);

stark_cards = getHouseCardsString('stark',[
  'nedstark.jpg',
  'robb.jpg',
  'greatjon.jpg',
  'glover.jpg',
  'cassel.jpg',
  'blackfish.jpg',
  'catelyn.jpg'
]);

targaryen_cards = getHouseCardsString('targaryen',[
  'khaldrogo.jpg',
  'jorah.jpg',
  'daenerys.jpg',
  'haggo.jpg',
  'qotho.jpg',
  'illyrio.jpg',
  'viserys.jpg'
]);

tyrell_cards = getHouseCardsString('tyrell',[
  'renly.jpg',
  'loras.jpg',
  'tarly.jpg',
  'mace.jpg',
  'margaery.jpg',
  'garlan.jpg',
  'ladyolenna.jpg'
]);

default_game_json = {
    "wildlings": "0",
    "round": "7",
    "ironThroneOrder": "Martell\nStark\nTyrell\nBaratheon\nGreyjoy\nLannister\nArryn\nTargaryen\nBolton",
    "fiefdomOrder": "Lannister\nTargaryen\nTyrell\nMartell\nGreyjoy\nBolton\nStark\nArryn\nBaratheon ",
    "kingsCourtOrder": "Stark\nTargaryen\nBolton\nTyrell\nBaratheon\nMartell\nGreyjoy\nLannister\nArryn",
    "garrisons": "The Eyrie: 2\nWinterfell: 2\nCasterly Rock: 2\nHighgarden: 2\nSunspear: 2\nPyke: 2\nRiverrun: 2\nPentos: 2\nDragonstone: 2",
    "supply": "Arryn: 2\nBaratheon: 3\nGreyjoy: 3\nLannister: 2\nMartell: 3\nStark: 4\nTargaryen: 4\nBolton: 3\nTyrell: 4",
    "victory": "Arryn: 3\nBaratheon: 3\nGreyjoy: 1\nLannister: 3\nMartell: 3\nStark: 4\nTargaryen: 4\nBolton: 4\nTyrell: 3",
    "units": {
        "arryn": "Eyrie: kn\nBloody Gate: KN\nKing's Road: FM\nThe Narrow Sea: sh, SH, SH\nThe Fingers: FM\nBay of Crabs: SH\nthe vale: KN, SE\nGulltown - Port: Sh\nGulltown: SE, FM",
        "baratheon": "King's Landing: FM, KN\nCrackclaw point: KN\nStorm's End: KN, KN\nBitterbridge: FM\nBlackwater Bay: SH, SH, SH\nShipbreaker Bay: SH, SH\nDragonstone - Port: SH\nDragonstone: FM",
        "greyjoy": "Ironman's Bay: sh, SH\nPyke: Footman, FM, FM\nGreywater Watch: KN, KN\nPyke - port: SH",
        "lannister": "Casterly Rock: SE, SE\nBanefort: KN\nLannisport: KN, KN\nSunset Sea: SH, sh\nGolden Tooth: KN\nLannisport-Harbor: sh\nSearoad Marches: KN",
        "martell": "Sunspear: SE\nSunspear - port: sh\nRainwood: KN, SE, KN\nBoneway: fm\nPrinces Pass: fm\nBay of Rhoyne: Sh\nSea of Dorne: SH, SH\nEast Summer Sea: SH, SH\nStarfall: FM, KN\nSalt Shore: KN\nLys: fm\nYronwood: KN",
        "stark": "Flint's Finger: KN, KN\nDeepwood - port: sh\nDeepwood: FM\nMoat Cailin: KN\nKarhold: fm\nThe Shivering Sea: sh\nThe Byte: SH, sh, SH\nBay of Ice: SH\nStoney Shore: FM, FM\nWhite Harbor: KN, KN, SE\nWinterfell: SE\nCastle Black: Fm",
        "targaryen": "Disputed lands: kn, Fm\nMyr: Kn\nVolantis: Kn, Kn\nVolantis - Port: Sh\nPentos - Port: Sh\nSea of Myrth: routed-Sh, routed-Sh, routed-Sh\nBraavos: Se, Se, Fm\nNorvos: Fm\nPentos: Kn",
        "bolton": "Riverrun: SE, SE\nWhispering Wood: KN\nSeagard: kn, FM\nThe Twins: FM, FM\nSeagard - port: SH\nStoney Sept: KN\nBlackwater: KN, KN, FM",
        "tyrell": "The Reach: KN, routed-KN\nHighgarden: FM, KN, KN\nOldtown: FM, SE, KN\nOldtown - port: SH\nRedwyne straights: SH\nThe Dornish Marches: fm\nWest Summer Sea: sh, sh\nThe Arbor: fm"
    },
    "orders": {
        "arryn": "Gulltown: M+0\nThe Eyrie: CP\nThe Bloody Gate: CP\nThe Kingsroad: S\nTHe Vale: S",
        "baratheon": "Dragonstone: CP\nDragonstone - port: CP\nKing's Landing: M+0\nStorm's End: M+1*\nCrackclaw Point: S\nBlackwater Bay: S+1*",
        "greyjoy": "Pyke: M-1\nPyke - Port: CP\nIronman's Bay: S",
        "lannister": "Casterly Rock: CP\nSunset Sea: M+0\nGolden Tooth: CP",
        "martell": "Sea of Dorne: s+1\nYronwood: S\nSalt Shore: S\nLys: CP\nSunspear - port: CP",
        "stark": "Castle Black: CP\nKarhold: CP\nDeepwood: CP*\nStoney Shore: M+1*\nWhite Harbor: M+0\nFlints Finger: S\nThe Byte: S+1*",
        "targaryen": "Pentos: S\nPentos - Port: M+0\nVolantis: M-1\nVolantis - Port: S\nMyr: CP*\nDisputed Lands: CP",
        "bolton": "Riverrun: M-1\nWhispering Wood: M+1\nStoney Sept: CP\nSeagard: S+1",
        "tyrell": "The Arbor: CP\nHighgarden: S*\nOldtown - port: CP\nThe Reach: S\nOldtown: M-1\nWest Summer Sea: S"
    },
    "powertokens": {
        "arryn": "Gulltown\nThe Vale",
        "baratheon": "Dragonstone",
        "greyjoy": "",
        "lannister": "",
        "martell": "Salt Shore\nYronwood",
        "stark": "White Harbor\nDreadfort\nDeepwood",
        "targaryen": "Golden Fields\nAndalos",
        "bolton": "Whispering Wood",
        "tyrell": "Oldtown\nThree Towers\nThe reach"
    },
    "housecards": {
        "arryn": arryn_cards,
        "baratheon": baratheon_cards,
        "greyjoy": greyjoy_cards,
        "lannister": lannister_cards,
        "martell": martell_cards,
        "stark": stark_cards,
        "targaryen": targaryen_cards,
        "bolton": bolton_cards,
        "tyrell": tyrell_cards
    },
    "housecardTracking": {
        "arryn": [false, false, false, false, false, false, false],
        "baratheon": [false, false, false, false, false, false, false],
        "greyjoy": [false, false, false, false, false, false, false],
        "lannister": [false, false, false, false, false, false, false],
        "martell": [false, false, false, false, false, false, false],
        "stark": [false, false, false, false, false, false, false],
        "targaryen": [false, false, false, false, false, false, false],
        "bolton": [false, false, false, false, false, false, false],
        "tyrell": [false, false, false, false, false, false, false]
    },
    "availablePowertokens": {
        "arryn": "5",
        "baratheon": "5",
        "greyjoy": "5",
        "lannister": "5",
        "martell": "5",
        "stark": "5",
        "targaryen": "5",
        "bolton": "5",
        "tyrell": "5"
    },
    "maxPowertokens": "20"
}
