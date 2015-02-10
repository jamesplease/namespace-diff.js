describe('Diffing two namespaces', function() {
  describe('that are the same', function() {
    beforeEach(function() {
      this.diff = namespaceDiff('books.book', 'books.book');
    });

    it('should return a diff with empty arrays', function() {
      expect(this.diff).to.deep.equal({
        outStates: [],
        inStates: []
      });
    });
  });

  describe('that share no similar parts', function() {
    beforeEach(function() {
      this.diff = namespaceDiff('books.book', 'pasta.is.good');
    });

    it('should return a diff up to the root', function() {
      expect(this.diff).to.deep.equal({
        outStates: ['books.book', 'books'],
        inStates: ['pasta', 'pasta.is', 'pasta.is.good']
      });
    });
  });

  describe('that share some similar parts', function() {
    beforeEach(function() {
      this.diff = namespaceDiff('books.book', 'books.comments.author');
    });

    it('should return a diff up to the root', function() {
      expect(this.diff).to.deep.equal({
        outStates: ['books.book'],
        inStates: ['books.comments', 'books.comments.author']
      });
    });
  });

  describe('that only subtracts from the start', function() {
    beforeEach(function() {
      this.diff = namespaceDiff('books.book.comments.author', 'books.book');
    });

    it('should return an empty array for in, and the correct out states', function() {
      expect(this.diff).to.deep.equal({
        outStates: ['books.book.comments.author', 'books.book.comments'],
        inStates: []
      });
    });
  });

  describe('that only adds to the start', function() {
    beforeEach(function() {
      this.diff = namespaceDiff('books.book', 'books.book.comments.author');
    });

    it('should return an empty array for out, and the correct in states', function() {
      expect(this.diff).to.deep.equal({
        outStates: [],
        inStates: ['books.book.comments', 'books.book.comments.author']
      });
    });
  });

  describe('that share no similar parts and use some other separator', function() {
    beforeEach(function() {
      this.diff = namespaceDiff('books/book', 'pasta/is/good', '/');
    });

    it('should return a diff up to the root', function() {
      expect(this.diff).to.deep.equal({
        outStates: ['books/book', 'books'],
        inStates: ['pasta', 'pasta/is', 'pasta/is/good']
      });
    });
  });
});


