/// Unicode code points for various special characters that also exist on
/// [code page 437][font].
///
/// [font]: http://en.wikipedia.org/wiki/Code_page_437
export enum CharCode {
  // 1 - 15.
  whiteSmilingFace = 0x263a,
  blackSmilingFace = 0x263b,
  blackHeartSuit = 0x2665,
  blackDiamondSuit = 0x2666,
  blackClubSuit = 0x2663,
  blackSpadeSuit = 0x2660,
  bullet = 0x2022,
  inverseBullet = 0x25d8,
  whiteCircle = 0x25cb,
  inverseWhiteCircle = 0x25d9,
  maleSign = 0x2642,
  femaleSign = 0x2640,
  eighthNote = 0x266a,
  beamedEighthNotes = 0x266b,
  whiteSunWithRays = 0x263c,

  // 16 - 31.
  blackRightPointingPointer = 0x25ba,
  blackLeftPointingPointer = 0x25c4,
  upDownArrow = 0x2195,
  doubleExclamationMark = 0x203c,
  pilcrow = 0x00b6,
  sectionSign = 0x00a7,
  blackRectangle = 0x25ac,
  upDownArrowWithBase = 0x21a8,
  upwardsArrow = 0x2191,
  downwardsArrow = 0x2193,
  rightwardsArrow = 0x2192,
  leftwardsArrow = 0x2190,
  rightAngle = 0x221f,
  leftRightArrow = 0x2194,
  blackUpPointingTriangle = 0x25b2,
  blackDownPointingTriangle = 0x25bc,

  // 32 - 47.
  space = 0x0020,
  exclamationPoint = 0x0021,
  doubleQuote = 0x0022,
  numberSign = 0x0023,
  dollarSign = 0x0024,
  percent = 0x0025,
  ampersand = 0x0026,
  apostrophe = 0x0027,
  leftParenthesis = 0x0028,
  rightParenthesis = 0x0029,
  asterisk = 0x002a,
  plus = 0x002b,
  comma = 0x002c,
  minus = 0x002d,
  period = 0x002e,
  slash = 0x002f,

  // 48 - 63.
  zero = 0x0030,
  one = 0x0031,
  two = 0x0032,
  three = 0x0033,
  four = 0x0034,
  five = 0x0035,
  six = 0x0036,
  seven = 0x0037,
  eight = 0x0038,
  nine = 0x0039,
  colon = 0x003a,
  semicolon = 0x003b,
  lessThan = 0x003c,
  equals = 0x003d,
  greaterThan = 0x003e,
  questionMark = 0x003f,

  // 64 - 95.
  at = 0x0040,
  aUpper = 0x0041,
  bUpper = 0x0042,
  cUpper = 0x0043,
  dUpper = 0x0044,
  eUpper = 0x0045,
  fUpper = 0x0046,
  gUpper = 0x0047,
  hUpper = 0x0048,
  iUpper = 0x0049,
  jUpper = 0x004a,
  kUpper = 0x004b,
  lUpper = 0x004c,
  mUpper = 0x004d,
  nUpper = 0x004e,
  oUpper = 0x004f,
  pUpper = 0x0050,
  qUpper = 0x0051,
  rUpper = 0x0052,
  sUpper = 0x0053,
  tUpper = 0x0054,
  uUpper = 0x0055,
  vUpper = 0x0056,
  wUpper = 0x0057,
  xUpper = 0x0058,
  yUpper = 0x0059,
  zUpper = 0x005a,
  leftBracket = 0x005b,
  backSlash = 0x005c,
  rightBracket = 0x005d,
  caret = 0x005e,
  underscore = 0x005f,

  // 96 - 127.
  accent = 0x0060,
  aLower = 0x0061,
  bLower = 0x0062,
  cLower = 0x0063,
  dLower = 0x0064,
  eLower = 0x0065,
  fLower = 0x0066,
  gLower = 0x0067,
  hLower = 0x0068,
  iLower = 0x0069,
  jLower = 0x006a,
  kLower = 0x006b,
  lLower = 0x006c,
  mLower = 0x006d,
  nLower = 0x006e,
  oLower = 0x006f,
  pLower = 0x0070,
  qLower = 0x0071,
  rLower = 0x0072,
  sLower = 0x0073,
  tLower = 0x0074,
  uLower = 0x0075,
  vLower = 0x0076,
  wLower = 0x0077,
  xLower = 0x0078,
  yLower = 0x0079,
  zLower = 0x007a,
  leftBrace = 0x007b,
  pipe = 0x007c,
  rightBrace = 0x007d,
  tilde = 0x007e,
  house = 0x2302,

  // 128 - 143.
  latinCapitalLetterCWithCedilla = 0x00c7,
  latinSmallLetterUWithDiaeresis = 0x00fc,
  latinSmallLetterEWithAcute = 0x00e9,
  latinSmallLetterAWithCircumflex = 0x00e2,
  latinSmallLetterAWithDiaeresis = 0x00e4,
  latinSmallLetterAWithGrave = 0x00e0,
  latinSmallLetterAWithRingAbove = 0x00e5,
  latinSmallLetterCWithCedilla = 0x00e7,
  latinSmallLetterEWithCircumflex = 0x00ea,
  latinSmallLetterEWithDiaeresis = 0x00eb,
  latinSmallLetterEWithGrave = 0x00e8,
  latinSmallLetterIWithDiaeresis = 0x00ef,
  latinSmallLetterIWithCircumflex = 0x00ee,
  latinSmallLetterIWithGrave = 0x00ec,
  latinCapitalLetterAWithDiaeresis = 0x00c4,
  latinCapitalLetterAWithRingAbove = 0x00c5,

  // 144 - 159.
  latinCapitalLetterEWithAcute = 0x00c9,
  latinSmallLetterAe = 0x00e6,
  latinCapitalLetterAe = 0x00c6,
  latinSmallLetterOWithCircumflex = 0x00f4,
  latinSmallLetterOWithDiaeresis = 0x00f6,
  latinSmallLetterOWithGrave = 0x00f2,
  latinSmallLetterUWithCircumflex = 0x00fb,
  latinSmallLetterUWithGrave = 0x00f9,
  latinSmallLetterYWithDiaeresis = 0x00ff,
  latinCapitalLetterOWithDiaeresis = 0x00d6,
  latinCapitalLetterUWithDiaeresis = 0x00dc,
  centSign = 0x00a2,
  poundSign = 0x00a3,
  yenSign = 0x00a5,
  pesetaSign = 0x20a7,
  latinSmallLetterFWithHook = 0x0192,

  // 160 - 175.
  latinSmallLetterAWithAcute = 0x00e1,
  latinSmallLetterIWithAcute = 0x00ed,
  latinSmallLetterOWithAcute = 0x00f3,
  latinSmallLetterUWithAcute = 0x00fa,
  latinSmallLetterNWithTilde = 0x00f1,
  latinCapitalLetterNWithTilde = 0x00d1,
  feminineOrdinalIndicator = 0x00aa,
  masculineOrdinalIndicator = 0x00ba,
  invertedQuestionMark = 0x00bf,
  reversedNotSign = 0x2310,
  notSign = 0x00ac,
  vulgarFractionOneHalf = 0x00bd,
  vulgarFractionOneQuarter = 0x00bc,
  invertedExclamationMark = 0x00a1,
  leftPointingDoubleAngleQuotationMark = 0x00ab,
  rightPointingDoubleAngleQuotationMark = 0x00bb,

  // 176 - 191.
  lightShade = 0x2591,
  mediumShade = 0x2592,
  darkShade = 0x2593,
  boxDrawingsLightVertical = 0x2502,
  boxDrawingsLightVerticalAndLeft = 0x2524,
  boxDrawingsVerticalSingleAndLeftDouble = 0x2561,
  boxDrawingsVerticalDoubleAndLeftSingle = 0x2562,
  boxDrawingsDownDoubleAndLeftSingle = 0x2556,
  boxDrawingsDownSingleAndLeftDouble = 0x2555,
  boxDrawingsDoubleVerticalAndLeft = 0x2563,
  boxDrawingsDoubleVertical = 0x2551,
  boxDrawingsDoubleDownAndLeft = 0x2557,
  boxDrawingsDoubleUpAndLeft = 0x255d,
  boxDrawingsUpDoubleAndLeftSingle = 0x255c,
  boxDrawingsUpSingleAndLeftDouble = 0x255b,
  boxDrawingsLightDownAndLeft = 0x2510,

  // 192 - 207.
  boxDrawingsLightUpAndRight = 0x2514,
  boxDrawingsLightUpAndHorizontal = 0x2534,
  boxDrawingsLightDownAndHorizontal = 0x252c,
  boxDrawingsLightVerticalAndRight = 0x251c,
  boxDrawingsLightHorizontal = 0x2500,
  boxDrawingsLightVerticalAndHorizontal = 0x253c,
  boxDrawingsVerticalSingleAndRightDouble = 0x255e,
  boxDrawingsVerticalDoubleAndRightSingle = 0x255f,
  boxDrawingsDoubleUpAndRight = 0x255a,
  boxDrawingsDoubleDownAndRight = 0x2554,
  boxDrawingsDoubleUpAndHorizontal = 0x2569,
  boxDrawingsDoubleDownAndHorizontal = 0x2566,
  boxDrawingsDoubleVerticalAndRight = 0x2560,
  boxDrawingsDoubleHorizontal = 0x2550,
  boxDrawingsDoubleVerticalAndHorizontal = 0x256c,
  boxDrawingsUpSingleAndHorizontalDouble = 0x2567,

  // 208 - 223.
  boxDrawingsUpDoubleAndHorizontalSingle = 0x2568,
  boxDrawingsDownSingleAndHorizontalDouble = 0x2564,
  boxDrawingsDownDoubleAndHorizontalSingle = 0x2565,
  boxDrawingsUpDoubleAndRightSingle = 0x2559,
  boxDrawingsUpSingleAndRightDouble = 0x2558,
  boxDrawingsDownSingleAndRightDouble = 0x2552,
  boxDrawingsDownDoubleAndRightSingle = 0x2553,
  boxDrawingsVerticalDoubleAndHorizontalSingle = 0x256b,
  boxDrawingsVerticalSingleAndHorizontalDouble = 0x256a,
  boxDrawingsLightUpAndLeft = 0x2518,
  boxDrawingsLightDownAndRight = 0x250c,
  fullBlock = 0x2588,
  lowerHalfBlock = 0x2584,
  leftHalfBlock = 0x258c,
  rightHalfBlock = 0x2590,
  upperHalfBlock = 0x2580,

  // 224 - 239.
  greekSmallLetterAlpha = 0x03b1,
  latinSmallLetterSharpS = 0x00df,
  greekCapitalLetterGamma = 0x0393,
  greekSmallLetterPi = 0x03c0,
  greekCapitalLetterSigma = 0x03a3,
  greekSmallLetterSigma = 0x03c3,
  microSign = 0x00b5,
  greekSmallLetterTau = 0x03c4,
  greekCapitalLetterPhi = 0x03a6,
  greekCapitalLetterTheta = 0x0398,
  greekCapitalLetterOmega = 0x03a9,
  greekSmallLetterDelta = 0x03b4,
  infinity = 0x221e,
  greekSmallLetterPhi = 0x03c6,
  greekSmallLetterEpsilon = 0x03b5,
  intersection = 0x2229,

  // 240 - 254.
  identicalTo = 0x2261,
  plusMinusSign = 0x00b1,
  greaterThanOrEqualTo = 0x2265,
  lessThanOrEqualTo = 0x2264,
  topHalfIntegral = 0x2320,
  bottomHalfIntegral = 0x2321,
  divisionSign = 0x00f7,
  almostEqualTo = 0x2248,
  degreeSign = 0x00b0,
  bulletOperator = 0x2219,
  middleDot = 0x00b7,
  squareRoot = 0x221a,
  superscriptLatinSmallLetterN = 0x207f,
  superscriptTwo = 0x00b2,
  blackSquare = 0x25a0
}
