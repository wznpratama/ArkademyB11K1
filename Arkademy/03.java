import java.util.Scanner;

class segi3kosong {
public static void main(String[] args){
int n;
int a, b=0, c, d, e;

System.out.println("Masukkan baris : ");
Scanner input = new Scanner(System.in);
n=input.nextInt();

a = n;
e = n-1;

for(c=1;c<=n;c++){
b = 1;
for(d=1;d<=a;d++) {
if (b<=e) {
System.out.print(" ");
b++;
} else {
if(d==b||d==a||e==0){

System.out.print("*");
}else
System.out.print(" ");
}
}
e--;
a++;
System.out.print("\n");
}
}
}   