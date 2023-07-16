const chai = require('chai');
const expect = chai.expect;

const { Word } = require('../class');

describe('Word', function () {
  let word;
  let word2;
  beforeEach(() => {
    word = new Word('computer');
    word2 = new Word('eat');
  });
  describe('Word constructor function', function () {
    it('should have a "word" property', function () {
      expect(word).to.have.key('word');
      expect(word2).to.have.key('word');
    });

    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.equal('computer');
      expect(word2.word).to.equal('eat');
    });
  });

  describe('removeVowels function', function () {
    it('should return a the word with all vowels removed', function () {
      let expected = 'cmptr';
      let expected2 = 't';
      let actual = word.removeVowels();
      let actual2 = word2.removeVowels();
      expect(actual).to.equal(expected);
      expect(actual2).to.equal(expected2);
    });
  });

  describe('removeConsonants function', function () {
    it('should return the word with the consonants removed', function () {
      let expected = 'oue';
      let expected2 = 'ea';
      let actual = word.removeConsonants();
      let actual2 = word2.removeConsonants();
      expect(actual).to.equal(expected);
      expect(actual2).to.equal(expected2);
    });
  });

  describe('pigLatin function', function () {
    it('should return the word converted to pig latin', function () {
      let expected = 'omputercay';
      let expected2 = 'eatyay';
      let actual = word.pigLatin();
      let actual2 = word2.pigLatin();
      expect(actual).to.equal(expected);
      expect(actual2).to.equal(expected2);
    });
  });
});
