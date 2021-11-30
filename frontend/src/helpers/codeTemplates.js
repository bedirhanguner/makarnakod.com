let getCodeTemplates = () => {
  return {
    python: `def uc_bes(n):
	output = []
	# kodunuzu buraya yazabilirsiniz.
	return output`,
    javascript: `let ucBes = (n) => {
	let results = [];
	// kodunuzu buraya yazabilirsiniz.
	return results;
};

module.exports = {
	ucBes
}`,
    golang: `package main
	  
import "strconv"

func UcBes(n int) []string {
	var results = make([]string, n)
	// kodunuzu buraya yazabilirsiniz.
	return results
}`,
    ruby: `def ucBes(n)
	results = []
	# kodunuzu buraya yazabilirsiniz.
	return results
end`,
  };
};

export default getCodeTemplates;
