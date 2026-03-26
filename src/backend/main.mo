import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import List "mo:core/List";
import Map "mo:core/Map";
import Order "mo:core/Order";
import Array "mo:core/Array";
import Principal "mo:core/Principal";

actor {
  type Campaign = {
    id : Text;
    title : Text;
    chapters : [Text]; // Chapter identifiers
    endings : [Text]; // Possible endings
  };

  type PlayerProgress = {
    currentCampaign : Text;
    currentChapter : Text;
    choices : [Text];
    reachedEndings : [Text];
  };

  module PlayerProgress {
    public func compare(p1 : PlayerProgress, p2 : PlayerProgress) : Order.Order {
      Text.compare(p1.currentCampaign, p2.currentCampaign);
    };
  };

  let campaigns : [(Text, Campaign)] = [
    (
      "callie",
      {
        id = "callie";
        title = "Callie's Journey";
        chapters = ["chapter1", "chapter2", "chapter3"];
        endings = ["ending1", "ending2", "ending3"];
      },
    ),
    (
      "kiara",
      {
        id = "kiara";
        title = "Kiara's Quest";
        chapters = ["chapter1", "chapter2", "chapter3"];
        endings = ["ending1", "ending2"];
      },
    ),
    (
      "natalia",
      {
        id = "natalia";
        title = "Natalia's Adventure";
        chapters = ["chapter1", "chapter2"];
        endings = ["ending1", "ending2"];
      },
    ),
    (
      "florian",
      {
        id = "florian";
        title = "Florian's Tale";
        chapters = ["chapter1", "chapter2", "chapter3", "chapter4"];
        endings = ["ending1", "ending2", "ending3", "ending4"];
      },
    ),
  ];

  let playerProgress = Map.empty<Principal, PlayerProgress>();

  public shared ({ caller }) func saveProgress(progress : PlayerProgress) : async () {
    if (not playerProgress.containsKey(caller)) {
      playerProgress.add(caller, progress);
    } else {
      Runtime.trap("Progress already exists");
    };
  };

  public shared ({ caller }) func updateProgress(progress : PlayerProgress) : async () {
    if (playerProgress.containsKey(caller)) {
      playerProgress.add(caller, progress);
    } else {
      Runtime.trap("No progress found to update");
    };
  };

  public query ({ caller }) func getProgress() : async PlayerProgress {
    switch (playerProgress.get(caller)) {
      case (null) { Runtime.trap("No progress found") };
      case (?prog) { prog };
    };
  };

  public query ({ caller }) func isProgressSaved() : async Bool {
    playerProgress.containsKey(caller);
  };

  public query ({ caller }) func getCampaign(campaignId : Text) : async Campaign {
    switch (campaigns.find(func(c) { c.0 == campaignId })) {
      case (?campaign) { campaign.1 };
      case (null) { Runtime.trap("Campaign not found") };
    };
  };

  public query ({ caller }) func getAllCampaigns() : async [Campaign] {
    campaigns.map(func(c) { c.1 });
  };

  public query ({ caller }) func getAllPlayerProgress() : async [PlayerProgress] {
    playerProgress.values().toArray().sort();
  };

  // Return all endings reached by the player
  public query ({ caller }) func getReachedEndings() : async [Text] {
    switch (playerProgress.get(caller)) {
      case (null) { [] };
      case (?p) { p.reachedEndings };
    };
  };
};
