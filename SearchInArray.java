package array;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * Given unsorted array, find next highst element for the given list of keys
 */
public class SearchInArray {
    public static void main(String[] args) {
        int[] arr = {4, 29,  26 ,18, 30, 25, 101};
        Arrays.sort(arr);
        List<Integer> searchKey = new ArrayList<>();
        searchKey.add(25);
        searchKey.add(18);
        searchKey.add(10);
        searchKey.add(31);
        searchKey.add(101);
        search(arr, 0, arr.length, searchKey);
    }

    private static void search(int[] arr, int low, int high, List<Integer> searchKey) {
        int mid = 0;

        for (int key : searchKey) {

            while (low <= high) {
                mid = low + (high - low) / 2;
                if (arr[mid] == key ) {
                    if((mid+1) >= arr.length)
                        System.out.println("element not found for key " + key);
                    else
                        System.out.println("next element for key " + key + " is " + arr[mid+1]) ;
                    break;
                } else if(arr[mid] < key) {
                    low = mid+1;
                } else if(arr[mid] > key)
                    high = mid -1;
            }
            if(key < arr[low] && key > arr[high])

                System.out.println("next highest element for key " + key + " is " +  arr[low]);
            low = 0;
            high = arr.length;
        }
    }
}
