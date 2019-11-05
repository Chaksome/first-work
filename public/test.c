#include<stdio.h>
int main()
{
    int i=5, s=0;
while(i--)  
    if (i%2) continue; 
    else s+=i;
    return 0;
}