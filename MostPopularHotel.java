package main.java.online.test.booking;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.PriorityQueue;
import java.util.stream.Stream;

public class MostPopularHotel {

    public static void main(String[] args) {
        String words = "breakfast beach citycenter location metro view staff price";
        String[][] reviews =
                {
                        {"1", "This hotel has a nice view of the citycenter. The location is perfect"},
                        {"2", "The breakfast is ok. Regarding location, it is quite far from citycenter but price is cheap so it is worth."},
                        {"1", "Location is excellent, 5 minutes from citycenter. There is also a metro station very close to the hotel."},
                        {"1", "They said I couldn't take my dog and there were other guests with dogs! That is not fair."},
                        {"2", "Very friendly staff and good cost-benefit ratio. Its location is a bit far from citycenter."}};

        String processedReview = processReviews(words, reviews);
    }

    private static String processReviews(String words, String[][] reviews) {
        Map<Integer, Integer> hotelReviewCount = new HashMap<>();

        for (String[] review : reviews) {
            int hotelId = Integer.valueOf(review[0]);
            int wordCountInReview = findWordMatchInReview(words, review[1]);
            hotelReviewCount.put(hotelId, hotelReviewCount.getOrDefault(hotelId, 0) + wordCountInReview);
        }

        PriorityQueue<Map.Entry<Integer, Integer>> priorityQueue = new PriorityQueue<>(
                (a,b)-> Objects.equals(a.getValue(), b.getValue()) ?
                        a.getKey().compareTo(b.getKey()) : b.getValue()-a.getValue()
        );

        for (Map.Entry<Integer, Integer> hotel : hotelReviewCount.entrySet()) {
            priorityQueue.offer(hotel);
        }

        System.out.println(Objects.requireNonNull(priorityQueue.poll()).getKey());
        return String.valueOf(priorityQueue.poll().getKey());
    }

    private static int findWordMatchInReview(String words, String review) {
        review = review.replace(".", "").replace("," , "");
        String[] wordsArr = words.split(" ");
        String[] reviewArr = review.split(" ");

        return (int) Stream.of(wordsArr).filter(w -> Stream.of(reviewArr).anyMatch(w::equalsIgnoreCase)).count();
    }
}
