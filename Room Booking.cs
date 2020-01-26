using System;

public class Room
{
	public string Name;
	public float Price;
	public Tuple<float,float> Coor = Tuple.Create(0f,0f);
	public void SetRoomDetail(string name, float price, Tuple<float,float> coor)
	{
		Name=name;
		Price=price;
		Coor=coor;
		Console.WriteLine("Name: "+name);
		Console.WriteLine("Price: "+price);
		Console.WriteLine("Coordinates:");
		Console.Write("x: "+coor.Item1);
		Console.Write("\ny: "+coor.Item2);
	}
}

public class Program
{
	public static void Main()
	{
		Tuple<float,float> coor = Tuple.Create(10f,20f);
		Room room=new Room();
		room.SetRoomDetail("Deluxe",499.99f,coor);
	}
}