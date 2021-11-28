package main

import (
	"reflect"
	"testing"
)

func TestCase1(t *testing.T) {
	if !reflect.DeepEqual(KnownCorrectUcBes(0), UcBes(0)) {
		t.Errorf("Slices are different!")
	}
}

func TestCase2(t *testing.T) {
	if !reflect.DeepEqual(KnownCorrectUcBes(1), UcBes(1)) {
		t.Errorf("Slices are different!")
	}
}

func TestCase3(t *testing.T) {
	if !reflect.DeepEqual(KnownCorrectUcBes(100), UcBes(100)) {
		t.Errorf("Slices are different!")
	}
}

// func main() {
// 	a := KnownCorrectUcBes(123)
// 	fmt.Println(a)
// }
