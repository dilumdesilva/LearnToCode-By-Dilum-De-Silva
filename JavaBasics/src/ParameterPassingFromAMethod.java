//this class includes the code related to parameter passing and returning values from a method.

public class ParameterPassingFromAMethod {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		System.out.print("Method 'add' has invoked result of 10 + 15+ 20 = ");
		add(10,15,20);
	}
	
	public static void add(int a,int b,int c){
		
		System.out.println(a+b+c);
	}

}
