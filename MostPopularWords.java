package problemSolving;

import java.util.*;

public class MostPopularWords {

    static  Map<String, Integer> countMap = new HashMap<>();

    public static void main(String[] args) {
        int numFeatures = 6;
        int topFeatures = 2;
        List<String> possibleFeatures = new ArrayList<>();
        possibleFeatures.add("storage");
        possibleFeatures.add("battery");
        possibleFeatures.add("hover");
        possibleFeatures.add("alexa");
        possibleFeatures.add("waterproof");
        possibleFeatures.add("solar");

        int numFeatureRequests = 7;
        List<String> featureRequests = new ArrayList<>();

        featureRequests.add("have storage");
        featureRequests.add("battery life");
        featureRequests.add("battery life");
        featureRequests.add("waterproof life");
        featureRequests.add("waterproof life");
        featureRequests.add("hover life");
        featureRequests.add("solar life");

        popularNFeatures(numFeatures, topFeatures, possibleFeatures, numFeatureRequests, featureRequests);
    }

    public static List<String> popularNFeatures(int numFeatures,
                                                int topFeatures,
                                                List<String> possibleFeatures,
                                                int numFeatureRequests,
                                                List<String> featureRequests) {


        Set<String> popularNFeatureSet = new HashSet<>();

        for (int i =0; i< numFeatures; i++) {
            popularNFeatureSet.add(possibleFeatures.get(i));
        }


        for (int i =0; i< numFeatureRequests; i++) {
            ifFeatureKeyPresent(featureRequests.get(i), popularNFeatureSet);
        }

        PriorityQueue<String> pq = new PriorityQueue<>((a,b) -> countMap.get(b) - countMap.get(a));
        for (String entry : countMap.keySet())
            pq.add(entry);

        List<String> result = new ArrayList<>();

        for (int i=0; i<topFeatures; i++) {
            String key = pq.remove();
            result.add(key);
        }

        return result;

    }

    private static void ifFeatureKeyPresent(String s, Set<String> popularNFeatureSet) {
        String[] str = s.split(" ");
        for (String st : str) {
            if (popularNFeatureSet.contains(st)) {
                countMap.put(st, countMap.getOrDefault(st, 0)+1);
            }
        }
    }
}
