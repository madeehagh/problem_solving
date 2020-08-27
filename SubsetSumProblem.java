package backtracking;

import java.util.ArrayList;
import java.util.List;

public class SubsetSumProblem {

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15};
        int sum = 6;
        findSubset(arr, sum);
    }

    private static void findSubset(int[] arr, int sum) {

        List<List<Integer>> result = new ArrayList<>();
        if (arr.length == 0) {
            System.out.println(result);
            return;
        }
        calculateSumOfSubset(arr, result, new ArrayList(), 0, 0, sum);

        System.out.println(result);
    }

    private static void calculateSumOfSubset(int[] arr, List<List<Integer>> result,
                                             List<Integer> temp, int start, int tempSum, int sum) { //arr, (), (), 0, 0, 6

        if (tempSum == sum) {
            result.add(new ArrayList<>(temp));//[1,2,3]
            return;
        }

        if(tempSum > sum)
            return;

        for (int i = start; i < arr.length; i++) {
            temp.add(arr[i]);
            calculateSumOfSubset(arr, result, temp, i + 1, tempSum + arr[i], sum);
            temp.remove(temp.size() - 1);
        }
    }
}