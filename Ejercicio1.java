import java.io.*;
    import java.util.*;
    import java.text.*;
    import java.math.*;
    import java.util.regex.*;

    public class Solution {

        public static void main(String[] args) {
            ArrayList<Integer> numeros = new ArrayList<Integer>();
            Scanner sc=new Scanner(System.in);
            String numerosString =sc.next();
            while(numerosString.contains(" ")||numerosString.contains("-")||numerosString.contains(",")){
                if(numerosString.contains(" ")){
                    String []aux = numerosString.split(" ");
                    if(aux.lenght()>=3){
                    for(String a : aux)
                        numeros.add(Integer.parseInt(a));
                    }
                }else if(numerosString.contains(" ")){
                    String []aux = numerosString.split(" ");
                    if(aux.lenght()>=3){
                    for(String a : aux)
                        numeros.add(Integer.parseInt(a));
                    }
                
            } else if (numerosString.contains(" ")){
                    String []aux = numerosString.split(" ");
                    if(aux.lenght()>=3){
                    for(String a : aux)
                        numeros.add(Integer.parseInt(a));
                    }
                }
           
            
        }
            System.out.print(" "+numeros.get(0));
    }
    }
