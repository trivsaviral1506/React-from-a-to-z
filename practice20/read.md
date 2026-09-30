what is useMemo:
1.suppose react is rendering its page and there is one task which has a lot of calculation in it ,so react provides feature to remember result of calculate and re-calculate only when dependencies change

2. we can also use useref but then we have to make one usestate for square varible , which will keep track ,and we can put number in its dependency array