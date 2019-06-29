import java.util.Scanner;
public class tinggipohon {
    public static void main(String[] wzn) {
    Scanner input = new Scanner(System.in);
    System.out.println("masukan tinggi pohon : ");
    int tinggipohon = input.nextInt();
    System.out.println("masukan tahun : ");
    int tahun = input.nextInt();
    
    int semi = tinggipohon+1;
    int panas = semi*3;
    double gugur = panas-1.5;
    double dingin = gugur*0.15;
    
    System.out.println();
    System.out.println("Tinggi pohon saat Musim Semi : "+semi);
    System.out.println("Tinggi pohon saat Musim Panas : "+panas);
    System.out.println("Tinggi pohon saat Musim Gugur : "+gugur);
    System.out.println("Tinggi pohon saat Musim Dingin : "+dingin);
    
    if (tahun ==2) System.out.println("tinggi pohon di akhir tahun genap :" + (dingin/2));
     else System.out.println("tinggi pohon di akhir tahun ganjil :" + dingin);
    }
  }
