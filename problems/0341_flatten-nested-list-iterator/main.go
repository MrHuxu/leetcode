package main

type NestedInteger struct {
	isInteger bool
	integer   int
	list      []*NestedInteger
}

func (this NestedInteger) IsInteger() bool           { return this.isInteger }
func (this NestedInteger) GetInteger() int           { return this.integer }
func (n *NestedInteger) SetInteger(value int)        { n.integer = value }
func (this *NestedInteger) Add(elem NestedInteger)   { this.list = append(this.list, &elem) }
func (this NestedInteger) GetList() []*NestedInteger { return this.list }

type NestedIterator struct {
	idx  int
	data []int
}

func Constructor(nestedList []*NestedInteger) *NestedIterator {
	ni := &NestedIterator{}

	var traverse func(*NestedInteger)
	traverse = func(integer *NestedInteger) {
		if integer.IsInteger() {
			ni.data = append(ni.data, integer.GetInteger())
		} else {
			for _, innerInteger := range integer.GetList() {
				traverse(innerInteger)
			}
		}
	}
	for _, integer := range nestedList {
		traverse(integer)
	}

	return ni
}

func (this *NestedIterator) Next() int {
	if this.idx >= len(this.data) {
		return -1
	}

	defer func() { this.idx++ }()

	return this.data[this.idx]
}

func (this *NestedIterator) HasNext() bool {
	return this.idx < len(this.data)
}
