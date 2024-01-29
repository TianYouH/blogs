a = list()
a.append(5)
a.extend(range(3))
a.insert(1, 999)
print(a)
print(id(a))
a = a + [50]
print(a)
print(id(a))
b = [1,2,3]*3
print(b)