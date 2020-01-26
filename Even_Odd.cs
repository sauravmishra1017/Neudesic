using System;

public class Program
{
	public static void Main()
	{
		Console.Write("Enter array size: ");
		int n=Convert.ToInt32(Console.ReadLine());
		
		int[] iarray=new int[n];
		int[] oarray=new int[n];
		for(int i=0;i<n;i++)
		{
			oarray[i]=iarray[i]=Convert.ToInt32(Console.ReadLine());
			if(i%2==0)
				oarray[i]++;
			else
				oarray[i]--;
		}
		Console.Write("Input: ");
		for(int i=0;i<n;i++)
		{
			Console.Write(iarray[i]);
			Console.Write(" ");
		}
		Console.WriteLine();
		Console.Write("Output: ");
		for(int i=0;i<n;i++)
		{
			Console.Write(oarray[i]);
			Console.Write(" ");
		}
		
	}
}